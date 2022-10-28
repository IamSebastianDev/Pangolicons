/** @format */

import esbuild from 'rollup-plugin-esbuild';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

export default [
    {
        input: './compiler/src/index.ts',
        output: [
            {
                file: './compiler/bin/index.js',
                format: 'es',
            },
        ],
        external: (id) => !/^[./]/.test(id),
        plugins: [
            resolve({ preferBuiltins: true }),
            commonjs(),
            json(),
            esbuild({
                tsconfig: '../tsconfig.json',
            }),
            cleanup({ extensions: ['.ts'] }),
        ],
    },
];
