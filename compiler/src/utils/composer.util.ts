/** @format */

export const composeError = (string: string): string => {
    return `\x1b[31m[Compiler] ${string}\x1b[0m`;
};

export const composeSuccess = (string: string): string => {
    return `\x1b[32m[Compiler] ${string}\x1b[0m`;
};

export const composeWarning = (string: string): string => {
    return `\x1b[33m${string}\x1b[0m`;
};
