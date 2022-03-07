import { compile } from 'mdsvex';

const options = {};

export const get = async ({ params }) => {
    const { name } = params;
    const res = await fetch(`https://unpkg.com/${name}/readme.md`);
    const readme = await res.text();

    const { code } = await compile(readme);
    // this is a dirty fix for a issue where mdsvex will not correctly
    // transform codeblocks. No idea why. Apparently noone ever has had
    // this problem before.
    const markup = code.replaceAll('{@html `', '').replaceAll('`}', '');

    return {
        body: {
            name,
            markup,
        },
    };
};
