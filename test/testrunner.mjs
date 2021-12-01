/** @format */

import fs from 'fs';

/**
 *
 *  This is a minimal custom test enivroment.
 *
 */

class Testrunner {
	static getTest() {
		const files = fs.readdirSync('./test');
		return files.filter((file) => file.trim().includes('.test.'));
	}

	static async run({ tests }) {
		// check if any tests were found
		if (tests.length === 0) {
			console.warn(`\x1b[31mTestrunner: No (0) Tests found.`);
			return;
		}

		/**
		 *
		 * For each path to a test that was found, process the file by importing it's default content
		 * and checking if it a) has a default export and b) contains a run method.
		 * 
		 * If both are true, the run function is executed and the result and report are retuned together with the
		 * test object that contains meta data like the title.
		 * 
		 * If no default export or run funtion are found, a error is logged and a error object is retuned, which can
		 * be easily filtered out by the report method.
		 */

		const reports = await Promise.all(
			tests.map(async (path) => {
				const { default: test } = await import(`./${path}`);

				if (test != undefined && test.run !== undefined) {
					const { result, report } = await test.run({ Testrunner });
					return { test, result, report };
				}

				console.warn(
					`\x1b[31mTestrunner: '${path}' is not exporting a test object or run function.\x1b[0m`
				);

				return { error: true, report: 'No test specified' };
			})
		);

		Testrunner.report({ reports });
	}

	static report({ reports }) {
		console.log({ reports });
	}
}

const tests = Testrunner.getTest();
Testrunner.run({ tests });
