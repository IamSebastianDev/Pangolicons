/** @format */

import fs from 'node:fs/promises';
import { resolve, join } from 'node:path';

const composeError = (string) => {
    return `\x1B[31m[Compiler] ${string}\x1B[0m`;
};
const composeSuccess = (string) => {
    return `\x1B[32m[Compiler] ${string}\x1B[0m`;
};

const wrapAsyncSafely = async (callback) => {
    let result = null,
        error = null;
    try {
        result = await callback();
    } catch (e) {
        error = e;
    } finally {
        return { result, error };
    }
};

const compiler = async (config) => {
    console.log({ config });
    const { input, output } = config;
    if (!input) {
        throw new Error(composeError(`No input directory found.`));
    }
    if (!output || output.length === 0) {
        throw new Error(composeError(`You need to specify at least one output directory.`));
    }
    const init = { afterInit: [], input: '', output: '', file: '', ...config };
    await Promise.all(init.afterInit.map(async (cb) => await cb(init)));
    const timer = composeSuccess(`\u23F3 Compiled in: `);
    console.time(timer);
    const { result: icons, error } = await wrapAsyncSafely(async () => {
        return await fs.readdir(init.input);
    });
    if (error) {
        throw new Error(composeError(`Error during parsing: ${error}`));
    }
    console.log(icons);
};

const config = (await import(resolve(join(process.cwd(), './compiler.config.mjs')))).default;
await compiler(config);
