/** @format */

import processIcons from './processors/processIcons.mjs';
import sanitizePath from './processors/sanitizePath.mjs';
import processOutput from './processors/processOutput.mjs';
import exportScripts from './processors/exportScripts.mjs';

export default {
	// the folder that contains all icons to parse

	inputDir: './icons/',

	/**
	 * The output directories for the compiled elements. Directories can be specified as string or array.
	 *
	 * icons will describe a destination to put all icons that have been stripped of their unnecessary markup & tags
	 * compressed will place a zip file containing all icons
	 */

	outputDir: {
		icons: './docs/static/assets/icons/svgs',
		compressed: './docs/static/assets/icons/compressed',
	},

	/**
	 * The properties that are used to define the input src file, the output file as well as the symbol that is used
	 * to split the src file where the icons will be appended.
	 */

	src: {
		input: './src/pangolicons.source.js',
		output: './src/pangolicons.js',
		symbols: {
			insertIcons: '/** @icons */',
			insertList: '/** @list */',
		},
	},

	/**
	 * Processors can be added to the processing chaing of the compiler. Processors will be invoked in order.
	 *
	 * Preprocessing:
	 *	The preprocessing chain is invoked in the beginning of the compiler and will process the Icons. There are two
	 *	default processors, the processIcon processor will extract tags and the content of the svg file. The
	 *	sanitizePath processor will remove unecessary elements from the path. Each subsequent processor will receive
	 *	the result of the previous processor, and error handling method and the config object.
	 *
	 * Postprocessing:
	 *	The postprocessing chain is invoked after the library file is created. The processors are passed the processed
	 *	icon array, the config object as well as an error handling method. All processors are invoked in order.
	 *
	 * All processors are invoked asynchronously to enable async await in it.
	 */

	processors: {
		pre: [processIcons, sanitizePath],
		post: [processOutput],
	},

	// logs the progress of the compilation to the console

	log: true,
};
