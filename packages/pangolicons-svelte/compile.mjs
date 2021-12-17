/** @format */

import fs from 'fs/promises';
import path from 'path';

const compile = async ({ src, iconsSrc, index }) => {
	/**
	 * The following regex is used to extract the path segment from the svg file using a named capture group,
	 * making accessing the group trivial.
	 */

	const pathRegex = /<svg .+?>(?<pathFrag>.+?)<\/svg>/im;

	/**
	 * To create a working Svelte icon, we need to process the icon files in two ways. We want to extract the name and
	 * save it for later, as well as extract the contents of the file, strip the surrounding svg tags, and retain only
	 * the paths. The resulting data is stored in an array of objects, containg name and path.
	 */

	const filenames = await fs.readdir(path.join(process.cwd(), iconsSrc));

	const icons = [];

	for (const name of filenames) {
		// get the raw file contents

		const raw = await fs.readFile(
			path.join(process.cwd(), iconsSrc, name),
			'utf-8'
		);

		// extract the svg path

		const svgPath = raw.match(pathRegex).groups.pathFrag;

		// push the path and the name without the file ending to the array

		icons.push({
			name: name.replace('.svg', ''),
			svgPath,
		});
	}

	// reset the index.js file

	await fs.writeFile(path.join(process.cwd(), index), '', 'utf-8');

	/**
	 * After extracting the necessary information, the actual svelte file needs to be written, and the export statement
	 * needs to be added to the index js file, before rollup bundles the file.
	 */

	for (const { svgPath, name } of icons) {
		// create the component name and write the svelte file

		const componentName = createComponentName({ name });

		await fs.writeFile(
			path.join(process.cwd(), src, `${componentName}.svelte`),
			createSvelteFileContents({ name, svgPath }),
			'utf-8'
		);

		// append the export in the index js file
		const statement = `export { default as ${componentName} } from './icons/${componentName}.svelte';\n`;
		await fs.appendFile(
			path.join(process.cwd(), index),
			statement,
			'utf-8'
		);
	}
};

const createComponentName = ({ name }) => {
	const [toCap, ...rest] = name;
	return `Pangol${[toCap.toUpperCase(), ...rest].join('')}`;
};

const createSvelteFileContents = ({ name, svgPath }) => {
	return `
		<script>
			let className = '';
			let size = "24px";
			let strokeWidth = "1.5";

	        export let attributes = {};
			$: ({className, size, strokeWidth} = attributes)
		</script>

        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="pangolicons pangolicons-${name} {className}">${svgPath}</svg>
	`;
};

compile({ iconsSrc: './icons/', src: './src/icons', index: './src/index.js' });
