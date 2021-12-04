/** @format */

import fs from 'fs/promises';
import { Pangolicons } from '../dist/pangolicons.esm.mjs';

export default {
	title: 'Number of Icons',
	description:
		'Check if the amount of icons provided matches the amount of Icons added.',
	run: async ({ Testrunner }) => {
		const { length: supposedCount } = await fs.readdir('./icons/');
		const existingCount = Object.keys(Pangolicons.icons).length;

		if (supposedCount === existingCount) {
			return {
				result: true,
				report: 'Amount of Icons matches.',
			};
		} else {
			return {
				result: false,
				report: `The amount of Icons differs by ${
					supposedCount - existingCount
				}.`,
			};
		}
	},
};
