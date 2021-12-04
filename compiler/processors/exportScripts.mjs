/** @format */

import fs from 'fs/promises';
import nodePath from 'path';

export default async ({ result, config, error }) => {
	/**
	 * This script is used to copy the created script to the documentation website, if a docs folder exists. This is a
	 * pure convinience feature and is not needed for compiling the library.
	 */

	const filename = config.src.output.split('/').pop();
	const path = nodePath.join(process.cwd(), `docs/src/scripts`);
	const output = nodePath.join(process.cwd(), config.src.output);
	let docs;

	try {
		docs = await fs.readdir(path);
	} catch (e) {
		return;
	}

	await fs.copyFile(output, nodePath.join(path, filename));
};
