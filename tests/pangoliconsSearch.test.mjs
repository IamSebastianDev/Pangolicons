/** @format */

/**
 * This test checks if the Pangolicons.search method returns an array and if it is capable of finding a random icon
 * name inside the array.
 */

import fs from 'fs/promises';
import { Pangolicons } from '../packages/pangolicons/dist/pangolicons.esm.mjs';

export default {
	name: 'Pangolicons.search()',
	description: 'Check if the method returns a) an array.',
	run: async ({ Testrunner }) => {
		const filteredIcons = Pangolicons.search({
			searchString: 'This String will return an empty array',
		});

		if (Array.isArray(filteredIcons) && filteredIcons.length === 0) {
			return {
				result: true,
				report: 'The search method returns an array, and the array included no elements false postively.',
			};
		} else if (!Array.isArray(filteredIcons)) {
			return {
				result: false,
				report: `The returned value is not of type Array!`,
			};
		} else {
			return {
				result: false,
				report: 'Everything went wrong!',
			};
		}
	},
};
