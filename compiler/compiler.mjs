/** @format */

// import dependencies

import fs from 'fs/promises';
import userConfig from './compiler.config.mjs';

// Main function for compiling the icons

const compileIcons = async ({ userConfig = {} }) => {
	// merge the user and default config

	const config = {
		log: true,
		outputDir: {
			icons: './icons',
		},
		...userConfig,
	};

	// assert that a input dir is provided
	if (!config.inputDir) {
		compilerError('No Input directory specified', true);
	}

	// set up & start the timer

	const timerID = '\x1b[32m ⏳ Time to compile';
	console.time(timerID);

	/**
	 * Read the specified input directory and collect all filenames that will later be used to extract the svg content
	 * out of.
	 */

	let fileNames;

	try {
		fileNames = await fs.readdir(config.inputDir);
	} catch (e) {
		compilerError(e);
	}

	/**
	 * Preprocessor chain
	 */

	let result = fileNames;

	for (const processor of config.processors.pre) {
		result = await processor({ config, result, error: compilerError });
	}

	/**
	 * Convert the Objects in the results array into Strings representing the class Constructor
	 */

	const icons = result.map((svg) => createIcons(svg));

	/**
	 * Process the sourcefile by reading the content's of the file provided by the config object. The file is then split
	 * into the head and tail portion. The head part can be written into the output file immeadiatley, followed by the
	 * previoulsy created icons, that will be placed into the file one after another.
	 */

	const srcFile = await fs.readFile(config.src.input, 'utf-8');
	const [head, tail] = srcFile.split(config.src.symbols.insertIcons);

	await fs.writeFile(config.src.output, head, 'utf-8');

	for (let i = 0; i < icons.length; i++) {
		await fs.appendFile(config.src.output, icons[i], 'utf-8');
		config.log &&
			console.log(
				`\x1b[32m File ${i + 1} of ${fileNames.length} parsed. \x1b[0m`
			);
	}

	// get the icon names as a simple array of strings.

	const iconNames = result.map(({ tags }) => tags[0]);

	/**
	 * Append the tail of the sourcefile, replacing the iconList symbol with the formerly created iconNames array and
	 * joining it, which created the comma seperated list of icon names we need inside the Objects icons property.
	 */

	await fs.appendFile(
		config.src.output,
		tail.replace(config.src.symbols.insertList, iconNames.join())
	);

	/**
	 * Process the output chain after the main library file has been compiled
	 */

	for (const processor of config.processors.post) {
		await processor({ config, result, error: compilerError });
	}

	// end the timer

	config.log && console.timeEnd(timerID);
};

compileIcons({ userConfig });

/**
 *
 * @description Method to log an error to the console during compile time.
 *
 * @param { String } error - the Error string created by the compiler
 * @param { Boolean? } critical - A boolean indicating if the error is critical and should stop the compiliation.
 * Defaults to false
 *
 */

function compilerError(error, critical = false) {
	const errorString = `\x1b[31mCompiler: ${error}\x1b[0m`;

	if (critical) {
		throw new Error(errorString);
	}

	console.error(errorString);
}

/**
 *
 * @description a utility method to create a Icon constructor string to insert into the file.
 *
 * @param { {} } param0 - the object passed to the function containing the tags and path properties.
 * @param { string[] } param0.tags - an array of strings containing the name and tags of the icon.
 * @param { string } param0.string - the actual path of the icon.
 *
 * @returns { String } the created String
 */

function createIcons({ tags, path }) {
	return `export const ${tags[0]} = new Icon({ 
	tags: [${tags.map((tag) => `'${tag}'`).join(',')}], 
	path: '${path}' 
});
`;
}
