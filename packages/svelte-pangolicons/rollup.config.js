/** @format */

import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
	input: './src/index.js',
	output: [
		{
			file: './dist/index.mjs',
			format: 'esm',
			plugins: [terser()],
			sourcemap: true,
		},
		{
			file: './dist/index.js',
			format: 'umd',
			name: 'Name',
			plugins: [terser()],
			sourcemap: true,
		},
	],
	plugins: [svelte(), resolve()],
};
