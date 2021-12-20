/** @format */

import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

export default {
	input: './src/index.js',
	output: [
		{
			file: './dist/index.cjs.js',
			format: 'cjs',
			plugins: [terser()],
			sourcemap: true,
		},
		{
			file: './dist/index.esm.mjs',
			format: 'esm',
			plugins: [terser()],
			sourcemap: true,
		},
	],
	plugins: [
		external(),
		postcss(),
		babel({
			exclude: 'node_modules/**',
		}),
		resolve(),
		commonjs(),
		image(),
		visualizer(),
	],
};
