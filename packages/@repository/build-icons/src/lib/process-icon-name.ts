export function processIconName(source: string) {
    const [name, tags] = source.replace(".svg", "").split("@");

    return {
        name: name,
        tags: tags.split(","),
    };
}
