export function Icon({ path, tags, name }: {
    path: any;
    tags?: any[];
    name: any;
}): {
    name: any;
    path: any;
    tags: any[];
    _defaultAttributes: {
        xmlns: string;
        width: string;
        height: string;
        viewBox: string;
        stroke: string;
        fill: string;
        'stroke-linecap': string;
        'stroke-width': string;
        'stroke-linejoin': string;
        'stroke-align': string;
    };
    toString: (attributes?: {}) => string;
    toSvg: (attributes?: {}) => SVGElement;
};
