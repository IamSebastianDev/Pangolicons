/** @format */

export default {
	// the folder that contains all icons to parse

	inputDir: './icons/',

	/**
	 * The properties that are used to define the input src file, the output file as well as the symbol that is used
	 * to split the src file where the icons will be appended.
	 */

	src: './src/pangolicons.source.js',
	output: './src/pangolicons.js',
	processorSymbolIcons: '/** @icons */',
	processorSymbolList: '/** @iconList */',

	/**
	 * The output directories for the compiled elements. Directories can be specified as string or array.
	 *
	 * icons will describe a destination to put all icons that have been stripped of their unnecessary markup & tags
	 * script will place the compiled file
	 * compressed will place a zip file containing all icons
	 *
	 */

	outputDir: {
		icons: ['./docs/icons/'],
		script: './src/pangolicons.js',
	},

	// logs the progress of the compilation to the console

	log: true,
};
