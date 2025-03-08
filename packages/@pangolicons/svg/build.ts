import { svgDefaultParameter } from "@repository/svg-base";
import { writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

async function build() {
    const manifest = await import("./icons.manifest.json");

    // For each icon in the manifest, we want to create a new svg
    // For that, we need to parse the actual svg string back into
    // a svg body, and set the default parameters that can then
    // be overwritten by css.
    for (const [name, definition] of Object.entries(manifest.icons)) {
        // 1) We create the attribute string
        const parameters = { ...svgDefaultParameter, "data-tags": definition.tags.join(","), class: name };
        const attributes = Object.entries(parameters).map(([name, value]) => `${name}="${value}"`);

        // 2) The actual svg
        const svg = `<svg ${attributes.join(" ")}>${definition.svg}</svg>`;

        // 3) And write the svg to the svg folder, where
        // it then can be imported by the user.
        await writeFile(resolve(join(process.cwd(), "svg", `${name}.svg`)), svg, { encoding: "utf-8" });
    }
}

build();
