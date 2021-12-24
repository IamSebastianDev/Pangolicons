/** @format */

import fs from 'fs/promises';
import nodepath from 'path';

const createIcon = async ({ name, color, size, width }) => {
	const root = './static/assets/icons/svgs/';
	const icon = nodepath.resolve(process.cwd(), root, name + '.svg');

	const svg = await fs.readFile(icon, 'utf-8');
	const pathRegex = /<svg .+?>(?<pathFrag>.+?)<\/svg>/im;
	const path = svg.match(pathRegex).groups.pathFrag;

	return `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="${size}"
    height="${size}"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#${color}"
    stroke-width="${width}"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="pangolicons pangolicons-${name}">
    ${path}
    </svg>`;
};

export async function get({ query }) {
	const name = query.get('name');
	const color = query.get('color');
	const size = query.get('size');
	const width = query.get('width');

	return {
		body: await createIcon({ name, color, size, width }),
	};
}
