import * as path from "path";
import * as process from "child_process";

const PARSE = "parse.exe";

export const commandExec = (params: UxPlugin.PluginParams) => {
  const parse_exe = path.join(__dirname, "..", PARSE);
  process.exec(
    `${parse_exe} parse -o ${params.output} -r ${params.page} -i ${params.lazyImport} -n ${params.filename}`,
    (err: any, stdout: any, stderr: any) => {
      // console.log(stdout);
    }
  );

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
