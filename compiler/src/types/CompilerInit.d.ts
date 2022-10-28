/** @format */

export type CompilerInit = {
    /**
     * @description
     * Directory containing all icons to parse as SVG
     * @type { string }
     */
    input: string;

    /**
     * @description
     * Directory or directories to place the compiled icons and the manifest file.
     * @type { Array<string> | string }
     */
    output: Array<string> | string;

    /**
     * @description
     * Path or paths to place a manifest file without placing the accompanying icons.
     */

    file: Array<string> | string;

    /**
     *
     */
    afterInit: Array<(init: CompilerInit) => Promise<void>>;

    beforeCompilation: Array<(icons: Array<string>) => Promise<Array<string>>>;
};
