/** @format */
import { Pangolicons } from 'pangolicons';

export const get = async ({ params, url }) => {
    const { name } = params;
    const { searchParams } = url;

    const icon = Pangolicons.icons[name];
    const svg = icon.toString({
        'stroke-width': searchParams.get('stroke'),
        stroke: '#' + searchParams.get('color'),
        width: searchParams.get('size'),
        height: searchParams.get('size'),
    });

    return { body: svg };
};
