/** @format */

import { terser } from 'rollup-plugin-terser';

export default {
	input: 'src/pangolicons.js',
	output: [
		{
			file: './dist/pangolicons.js',
			format: 'cjs',
			plugins: [terser({ module: false, toplevel: true })],
		},
		{
			file: './dist/pangolicons.esm.mjs',
			format: 'es',
			plugins: [terser()],
		},
	],
};
