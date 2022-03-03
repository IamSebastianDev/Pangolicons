/** @format */

import fs from 'fs/promises';
import { Pangolicons } from '../packages/pangolicons/dist/pangolicons.esm.mjs';

export default {
	name: 'Icon Names',
	description:
		'Check if the amount of unique Names is equal to the amount of icons.',
	run: async ({ Testrunner }) => {
		const fileNames = await fs.readdir('./icons/');
		const numberOfIcons = Object.keys(Pangolicons.icons).length;

		const iconNames = [
			...new Set(fileNames.map((name) => name.split('@')[0])),
		];

		if (iconNames.length === numberOfIcons) {
			return {
				result: true,
				report: 'There are zero (0) Icons missing.',
			};
		} else {
			return {
				result: false,
				report: `There are ${iconNames - numberOfIcons} missing.`,
			};
		}
	},
};
