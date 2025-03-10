import type { IconSrc } from "@repository/shared";

export async function generateJsonManifest(icons: Map<string, IconSrc>) {
    return JSON.stringify({
        name: "pangolicons.manifest",
        created: Date.now(),
        icons: Object.fromEntries(icons.entries()),
    });
}
