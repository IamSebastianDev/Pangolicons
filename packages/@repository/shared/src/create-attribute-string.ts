import { defaultAttributes } from "./default-attributes";

export const createAttributeString = (attributes: Record<string, unknown>) => {
    return Object.entries({ ...defaultAttributes, ...attributes })
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");
};
