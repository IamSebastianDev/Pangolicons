import { Builder } from "@iasd/bun-bake";
import pkg from "./package.json";

await new Builder({ watch: false, clean: true, verbose: false }).for("browser").from({
    entry: "./src/index.ts",
    ...pkg,
});
