/** @format */

// import dependencies

import fs from 'fs/promises';

// export the processor

export default async ({ config, result, error }) =>
	await Promise.all(
		result.map(async (file) => {
			/**
			 * Extract the name and tags out of the filename. The tags are converted to an array, to make it possible to
			 * add the name of the Icon to the tag array. This will ensure that every icon has at least one tag, even
			 * if no other tags are provided.
			 */

			let [name, tags] = file.split('@');
			tags = [...new Set([name, ...tags.split('.')[0].split(',')])];

			/**
			 * read the files content and extract the complete svg from it.
			 */

			let path;

			try {
				path = await fs.readFile(`${config.inputDir}/${file}`, 'utf-8');
			} catch (e) {
				error(e);
			}

			return { tags, path };
		})
	);
