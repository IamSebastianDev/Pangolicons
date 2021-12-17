/** @format */

// import dependencies
import fs from 'fs/promises';
import nodePath from 'path';
import { execSync } from 'child_process';

export default async ({ result, config, error }) => {
	/**
	 * Check if all output folder exists, and if not, create them recursively. To make processing the paths easier, and
	 * to unifiy behaviour between strings and arrays inide the string, the outputDir and compressed paths are
	 * converted to arrays if they're not already arrays, undefined elements are removed.
	 *
	 * For both path Arrays, the folders are checked for existence or created recursively by itterating them.
	 */

	const iconPaths = [config.outputDir.icons]
		.flat()
		.filter((elem) => elem !== undefined);
	const compressedPaths = [config.outputDir.compressed]
		.flat()
		.filter((elem) => elem !== undefined);

	for (const dir of [...iconPaths, ...compressedPaths]) {
		await fs.mkdir(nodePath.join(process.cwd(), dir), { recursive: true });
	}

	/**
	 * Process the available output directories accordingly.
	 */

	for (const dir of iconPaths) {
		for (const { tags, path } of result) {
			await fs.writeFile(
				nodePath.join(process.cwd(), dir, `${tags[0]}.svg`),
				createSvgIcon({ path })
			);
		}
	}

	let folder = iconPaths[0];

	for (const dir of compressedPaths) {
		const zip = zipFolder({
			folder,
			path: nodePath.join(process.cwd(), dir),
			name: 'Pangolicons.latest.zip',
		});

		await fs.writeFile(
			nodePath.join(process.cwd(), dir, 'Pangolicons.latest.zip'),
			zip
		);
	}
};

function createSvgIcon({ path }) {
	const attributesToAssign = {
		xmlns: 'http://www.w3.org/2000/svg',
		width: '24',
		height: '24',
		viewBox: '0 0 24 24',
		stroke: 'currentColor',
		fill: 'none',
		'stroke-linecap': 'round',
		'stroke-width': '1.5',
		'stroke-linejoin': 'round',
		'stroke-align': 'center',
		'stroke-linejoin': 'round',
	};

	// create the attribute string by itterating over the created object and concatining them to the string.
	let attributeString = '';

	for (const attributeName in attributesToAssign) {
		if (Object.hasOwnProperty.call(attributesToAssign, attributeName)) {
			const attribute = attributesToAssign[attributeName];
			attributeString += `${attributeName}="${attribute}" `;
		}
	}

	return `<svg ${attributeString}>${path}</svg>`;
}

function zipFolder({ folder, name }) {
	return execSync(`zip -r ${name} *`, {
		cwd: folder,
	});
}
