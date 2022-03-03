/** @format */

import { exec } from 'child_process';

export default {
	name: 'Treeshakeable',
	description: 'Check if the ESM version of the file is treeshakeable',
	run: async ({ Testrunner }) => {
		const esmPath = './packages/pangolicons/dist/pangolicons.esm.mjs';

		return new Promise((resolve, reject) => {
			exec(`npx agadoo ${esmPath}`, (error, stdout, stderr) => {
				if (error !== null) {
					reject({ report: error, result: false });
				}

				if (!stderr.includes('Failed') || stdout.includes('Failed')) {
					resolve({
						result: true,
						report: 'Success! The library is fully tree-shakeable.',
					});
				}
			});
		});
	},
};
