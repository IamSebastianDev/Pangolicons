/** @format */

import fs from 'node:fs/promises';
import { resolve, join } from 'node:path';
import type { CompilerInit } from '../types';
import { composeError, composeSuccess } from '../utils/composer.util';
import { wrapAsyncSafely } from '../utils/wrapAsyncSafely.util';

export const compiler = async (config: Partial<CompilerInit>): Promise<void> => {
    console.log({ config });
    const { input, output } = config;

    // check the import config parameters for compliance
    if (!input) {
        throw new Error(composeError(`No input directory found.`));
    }

    if (!output || output.length === 0) {
        throw new Error(composeError(`You need to specify at least one output directory.`));
    }

    const init: CompilerInit = { afterInit: [], beforeCompilation: [], input: '', output: '', file: '', ...config };

    /**
     * The first lifecycle hook to occur is the afterInit hook.
     * Each function p
     */

    await Promise.all(init.afterInit.map(async (cb) => await cb(init)));

    // create the timer to track compile time
    const timer = composeSuccess(`⏳ Compiled in: `);
    console.time(timer);

    // parse the icons from the specified input directory
    let { result: icons, error } = await wrapAsyncSafely(async () => {
        return await fs.readdir(resolve(join(process.cwd(), init.input)));
    });

    if (error || !icons) {
        throw new Error(composeError(`Error during parsing: ${error}`));
    }

    /**
     * The second lifecycle hook is beforeCompilation and is executed before the icons
     * will be compiled. The icon file names are passed as an array to the callback methods
     * and the values are
     */

    for (const hookFunction of init.beforeCompilation) {
        icons = await hookFunction(icons);
    }
};
