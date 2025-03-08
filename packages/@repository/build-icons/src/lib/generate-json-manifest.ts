export async function generateJsonManifest(icons: Map<string, { name: string; tags: string[]; svg: string }>) {
    return JSON.stringify({
        name: "pangolicons.manifest",
        created: Date.now(),
        icons: Object.fromEntries(icons.entries()),
    });
}
