/** @format */

// import dependencies

import { appendFile } from 'fs';
import fs from 'fs/promises';
import config from './compiler.config.mjs';

// Main function for compiling the icons

const compileIcons = async ({ config }) => {
	// set up & start the timer

	const timerID = '\x1b[32m ⏳ Time to compile';
	console.time(timerID);

	/**
	 * Get and process the specified sourcefile, that is split at the specified delimitor into a head and tail part.
	 * The Icons will later be appended after the head and before the tail.
	 */

	let srcFile;

	try {
		srcFile = await fs.readFile(config.src, 'utf-8');
	} catch (e) {
		compileError(e, true);
	}

	const [head, tail] = srcFile.split(config.processorSymbolIcons);

	/**
	 * Write the "head" part of the src file to the output file. The Icons will be appended before the tail part is
	 * added.
	 */

	try {
		await fs.writeFile(config.output, head, 'utf-8');
	} catch (e) {
		compileError(e);
	}

	/**
	 * Read the specified input directory and collect all filenames that will later be used to extract the svg content
	 * out of.
	 */

	let fileNames;

	try {
		fileNames = await fs.readdir(config.inputDir);
	} catch (e) {
		compileError(e);
	}

	/**
	 *
	 * Itterate over the array of filenames and call the append Icon function for each Icon. The function will create a
	 * icon out of the file's content and append it to the output file.
	 *
	 */

	for (const file of fileNames) {
		const icon = await createIcon({ file, path: config.inputDir });
		await fs.appendFile(config.output, icon, 'utf-8');
	}

	// end the timer

	config.log && console.timeEnd(timerID);
};

compileIcons({ config });

function sanitizePath({ svgString }) {
	const defRegex = new RegExp(/<svg .+?<\/defs>(?<pathFrag>.+?)<\/svg>/im);
	const classRegex = new RegExp(/class=".+?"/gim);

	const matchedFragment = [...svgString.match(defRegex)][1];
	const pathFragment = matchedFragment.replace(classRegex, '');

	return pathFragment;
}

async function createIcon({ file, path }) {
	/**
	 * Extract the name and tags out of the filename. The tags are converted to an array, to make it possible to
	 * add the name of the Icon to the tag array. This will ensure that every icon has at least one tag, even if no other tags
	 * are provided.
	 */

	let [name, tags] = file.split('@');
	tags = [...new Set([name, ...tags.split('.')[0].split(',')])];

	/**
	 * read the files content
	 */

	let svgString;

	try {
		svgString = await fs.readFile(`${path}/${file}`, 'utf-8');
	} catch (e) {
		compileError(e);
	}

	const parsedPath = sanitizePath({ svgString });

	const icon = `const ${name} = new Icon({ 
	tags: [${tags.map((tag) => `'${tag}'`).join(',')}], 
	def: '${parsedPath}' 
});

export { ${name} }

`;

	return icon;
}

function compileError(e, critical = false) {
	const errorString = `\x1b[31mCompiler: ${e}\x1b[0m`;
	if (critical) {
		throw new Error(errorString);
	}

	console.error(errorString);
}
