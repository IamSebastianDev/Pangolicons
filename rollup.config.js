/** @format */

import { terser } from 'rollup-plugin-terser';

export default [
	{
		input: 'src/pangolicons.mjs',
		output: [
			{
				file: './dist/pangolicons.js',
				format: 'cjs',
				plugins: [terser({ module: false, toplevel: true })],
			},
		],
	},
	{
		input: 'src/pangolicons.esm.mjs',
		output: [
			{
				format: 'esm',
				file: './dist/pangolicons.esm.mjs',
				plugins: [terser()],
			},
		],
	},
];
