export { icons } from "../icons.manifest.json";
import { type IconSrc, createAttributeString, defaultAttributes } from "@repository/shared";

export function Icon(src: IconSrc, attributes: Record<string, unknown>) {
    const attrs = createAttributeString(attributes);

    return {
        ...src,
        toString() {
            return `<svg ${attrs}>${src.svg}</svg>`;
        },
        toElement() {
            const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (const [key, value] of Object.entries({ ...defaultAttributes, ...attributes })) {
                icon.setAttribute(key, value);
            }

            icon.innerHTML = src.svg;
            return icon;
        },
    };
}
