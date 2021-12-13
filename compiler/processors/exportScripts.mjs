/** @format */

import fs from 'fs/promises';
import nodePath from 'path';

export default async ({ result, config, error }) => {
	/**
	 * This script is used to copy the created script to the documentation website, if a docs folder exists. This is a
	 * pure convinience feature and is not needed for compiling the library.
	 */

	// get the filename of the element
	const filename = config.src.output.split('/').pop();

	// the actual path to the previously created file, which will be copied
	const output = nodePath.join(process.cwd(), config.src.output);

	// the path to place the script
	const destPath = nodePath.join(process.cwd(), config.processorScriptOutput);

	try {
		await fs.readdir(destPath);
	} catch (e) {
		await fs.mkdir(destPath, { recursive: true });
	}

	await fs.copyFile(output, nodePath.join(destPath, filename));
};
