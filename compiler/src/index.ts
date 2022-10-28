/** @format */

import { compiler } from './lib/compiler';
import { join, resolve } from 'node:path';
const config = (await import(resolve(join(process.cwd(), './compiler.config.mjs')))).default;

await compiler(config);
