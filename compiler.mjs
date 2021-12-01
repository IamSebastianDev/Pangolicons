/** @format */

// import dependencies

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

	try {
		const srcFile = await fs.readFile(config.inputFile, 'utf-8');
		const [head, tail] = srcFile.split(config.processorSymbol);
	} catch (e) {
		console.log(`Compiler: ${e}`);
	}

	/**
	 * Read the specified input directory and collect all filenames that will later be used to extract the svg content
	 * out of.
	 */

	const fileNames = await fs.readdir(config.inputDir);
	console.log(fileNames);

	// end the timer

	config.log && console.timeEnd(timerID);
};

compileIcons({ config });
