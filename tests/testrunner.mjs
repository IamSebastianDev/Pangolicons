/** @format */

import fs from 'fs';

/**
 *
 *  This is a minimal custom test enivroment.
 *
 */

class Testrunner {
	static getTest() {
		const files = fs.readdirSync('./tests');
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
		// print the individual reports

		reports.forEach(({ report, result, test }, index) => {
			const { name, description } = test;
			Testrunner.log.result({ result, index, reports, name });
			Testrunner.log.report({ result, report, description });
			console.log();
		});

		// Seperate the passed and failed tests into their own array

		const failed = reports.filter(({ result }) => !result);
		const passed = reports.filter(({ result }) => result);

		// Process the summary

		Testrunner.log.summary({ reports, failed, passed });
		console.log('\x1b[0m');
	}

	// methods to log different results to the console

	static log = {
		/**
		 * @description method to log the results of the tests to the console.
		 */

		result: ({ result, index, reports, name }) => {
			const color = result ? '\x1b[32m' : '\x1b[31m';
			const indexedString = `${index + 1} / ${reports.length}`;

			console.log(`${color}🧪 Test ${indexedString} complete: ${name}`);
		},

		/**
		 * @description method to log the tests report, and in case of failure the description to the console
		 */

		report: ({ result, report, description }) => {
			console.log(`\x1b[2mReport: ${report}\x1b[0m`);
			!result && console.log(`\x1b[2m${description}\x1b[0m`);
		},

		/**
		 * @description method to log the summary of all run tests to the console, inclusive the amount of run tests,
		 * and how many passed and failed, and the perecentage of it,
		 */

		summary: ({ reports, failed, passed }) => {
			const numberOfReports = reports.length;
			const style = `\x1b[4m\x1b[1m`;

			// all Tests passed

			if (failed.length === 0) {
				console.log(`${style}\x1b[32m🧪 All tests passed!\x1b[0m`);
				console.log(
					`\x1b[32m${passed.length} / ${numberOfReports} Tests were ok!`
				);
			}

			// all Tests failed

			if (failed.length === numberOfReports) {
				console.log(`${style}\x1b[31m🧪 No tests passed!\x1b[0m`);
				console.log(
					`\x1b[31m\x1b[2m${failed.length} / ${numberOfReports} Tests failed.`
				);
				Testrunner.log.failedTests({ failed });
			}

			// some tests failed

			if (failed.length > 0) {
				console.log(`${style}\x1b[33m🧪 Some tests failed!\x1b[0m`);
				console.log(
					`\x1b[31m\x1b[2m${failed.length} / ${numberOfReports} Tests failed.`
				);
				Testrunner.log.failedTests({ failed });
			}

			console.log();

			// log the Percentage of passsed tests to the Console.

			Testrunner.log.percentageReport({ numberOfReports, passed });

			console.log();
		},

		/**
		 * @description method to log a list of the names of failed tests to the console
		 */

		failedTests: ({ failed }) => {
			console.log(`\x1b[2m\x1b[31m🦠 The following tests failed:\x1b[0m`);
			failed.forEach(({ test }) => {
				console.log(`\x1b[31mFailed: ${test.name}`);
			});
		},

		/**
		 * @description method to log the percentage of passed tests to the console.
		 */

		percentageReport: ({ numberOfReports, passed }) => {
			const percentage = (100 * passed.length) / numberOfReports;
			console.log(`${percentage.toFixed(2)}% of Tests passed.`);
		},
	};
}

const tests = Testrunner.getTest();
Testrunner.run({ tests });
