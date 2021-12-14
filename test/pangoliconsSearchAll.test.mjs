/** @format */

import fs from 'fs/promises';
import { Pangolicons } from '../dist/pangolicons.esm.mjs';

export default {
	name: 'pangolicons.search() - AllIcons',
	description: 'Check if every icon can be found by the search() method.',
	run: async ({ Testrunner }) => {
		const fileNames = await fs.readdir('./icons/');
		const numberOfIcons = Object.keys(Pangolicons.icons).length;

		const iconNames = [
			...new Set(fileNames.map((name) => name.split('@')[0])),
		];

		// Search for every icon and make sure that every icon can be found.

		const results = iconNames.map((iconName) => {
			const foundIcons = Pangolicons.search({ searchString: iconName });

			if (foundIcons.find((elem) => elem.name === iconName)) {
				return true;
			} else {
				return iconName;
			}
		});

		// get the icons that could not be found for any reason

		const notFoundIcons = results.filter((elem) => elem !== true);

		if (notFoundIcons.length === 0) {
			return {
				result: true,
				report: 'All icons were deemed searchable!',
			};
		} else {
			return {
				result: false,
				report: `There are ${
					notFoundIcons.length
				} icons not searchable: \n${notFoundIcons.join('\n')}`,
			};
		}
	},
};
