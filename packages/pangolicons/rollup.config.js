/** @format */

import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/compiled/pangolicons.js',
		output: [
			/**
			 * The CJS bundle is outputted for a node enviroment and is used as the main entry point for the npm
			 * package.
			 */

			{
				file: './dist/pangolicons.js',
				format: 'cjs',
				plugins: [terser({ module: false, toplevel: true })],
				sourcemap: true,
			},

			/**
			 * The IIFE bundle is used for delivery via unpgk cdn and as the browser package file. It will work in any
			 * browser, even if it doesn't support ESM Modules, imports or exports. It enables access to the
			 * Pangolicons object globally
			 */

			{
				file: './dist/pangolicons.browser.min.js',
				format: 'iife',
				plugins: [terser()],
				sourcemap: true,
			},
		],
	},
	{
		input: 'src/compiled/pangolicons.esm.mjs',

		/**
		 * The ESM bundle is used for modern browsers & node enviroments, it will provide granular export for Icons and
		 * the Pangolicons object alike.
		 */

		output: [
			{
				format: 'esm',
				file: './dist/pangolicons.esm.mjs',
				plugins: [terser()],
				sourcemap: true,
			},
		],
	},
];
