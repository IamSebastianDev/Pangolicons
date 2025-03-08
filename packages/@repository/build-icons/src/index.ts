import { $ } from "bun";
import { readFileSync } from "node:fs";
import { readdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { generateJsonManifest } from "./lib/generate-json-manifest";
import { processIconName } from "./lib/process-icon-name";
import { processSvg } from "./lib/process-svg";

// Internal script to compile the svg files in the `icons` directory
// at the root of the repository into a json manifest, that can be
// consumed from the different packages.
// The schema contains all important data needed to construct
// the svg icons
async function buildIcons() {
    // As turbo spawns a new process for each package,
    // we cannot easily find the repositories root.
    // We can however check for the git root, which will yield
    // a useable result.
    const root = (await $`git rev-parse --show-toplevel`).stdout.toString().trim();
    const input = await readdir(resolve(join(root, "icons")));

    // We want to read all the files and process their filenames as well as
    // store their contents in a map, that we can later use to
    // generate the json manifest
    const icons = new Map(
        input.map((file) => {
            const { name, tags } = processIconName(file);
            const svg = readFileSync(resolve(join(root, "icons", file)), { encoding: "utf-8" });
            const data = { name, tags, svg: processSvg(svg) };

            return [name, data] as const;
        })
    );

    // We can then use the processed icons sorted
    // in the map to generate the actual json manifest
    // before writing the manifest to the output paths
    const json = await generateJsonManifest(icons);
    // Output paths are constructed from each package located
    // under `packages/@pangolicons`;
    const outputs = await readdir(resolve(join(root, "packages/@pangolicons")));
    for (const path of outputs) {
        const resolved = resolve(join(root, "packages", "@pangolicons", path, "icons.manifest.json"));
        await writeFile(resolved, json, { encoding: "utf-8" });
    }
}

await buildIcons();
