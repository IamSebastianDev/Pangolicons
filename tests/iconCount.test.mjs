/** @format */

import fs from 'fs/promises';
import { Pangolicons } from '../packages/pangolicons/dist/pangolicons.esm.mjs';

export default {
	name: 'Number of Icons',
	description:
		'Check if the amount of icons provided matches the amount of Icons added.',
	run: async ({ Testrunner }) => {
		const { length: numberOfFiles } = await fs.readdir('./icons/');
		const numberOfIcons = Object.keys(Pangolicons.icons).length;

		if (numberOfFiles === numberOfIcons) {
			return {
				result: true,
				report: 'Amount of Icons matches.',
			};
		} else {
			return {
				result: false,
				report: `The amount of Icons differs by ${
					numberOfFiles - numberOfIcons
				}.`,
			};
		}
	},
};
