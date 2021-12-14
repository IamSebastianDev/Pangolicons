/** @format */

import fs from 'fs/promises';
import nodePath from 'path';

export default async ({ result, config, error }) => {
	/**
	 * This processor is used to create a CJS Version of the Pangolicons file with an appended script to make the
	 * Pangolicons object globally accessible. This would usually interfere with treeshaking, which is harder to do in
	 * CJS anyway, so that this solution looks like the easiest way solve the problem of supporting both.
	 */

	// check if a CJS Output is defined

	if (!config.src.outputCJS) {
		return;
	}

	const outputPath = nodePath.join(process.cwd(), config.src.output);
	const copyPath = nodePath.join(process.cwd(), config.src.outputCJS);

	// copy the esm file to the destination of the CJS file
	await fs.copyFile(outputPath, copyPath);

	const globalAccessorString = `\nglobalThis.Pangolicons = Pangolicons;\n`;
	await fs.appendFile(copyPath, globalAccessorString, 'utf-8');
};
