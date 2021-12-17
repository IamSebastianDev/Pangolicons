/** @format */

import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

export default {
	input: './index.js',
	output: [
		{ file: './dist/index.mjs', format: 'esm' },
		{ file: './dist/index.js', format: 'umd', name: 'Name' },
	],
	plugins: [svelte(), resolve()],
};
