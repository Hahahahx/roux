"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandExec = void 0;
const path = require("path");
const process = require("child_process");
const PARSE = "parse.exe";
const commandExec = (params) => {
    const parse_exe = path.join(__dirname, "..", PARSE);
    process.exec(`${parse_exe} parse -o ${params.output} -r ${params.page} -i "${params.lazyImport}" -n ${params.filename}`, (err, stdout, stderr) => {
        // console.log(stdout);
    });
    // const { status } = process.spawnSync(
    //     parse_exe,
    //     [
    //         "parse",
    //         "-o " + this.output,
    //         "-r " + this.pagePath,
    //         "-n " + this.filename,
    //     ],
    //     { stdio: "inherit" }
    // );
    // (process as any).exitCode = status === null ? 1 : status;
};
exports.commandExec = commandExec;
