import { commandExec } from "./common";

export class RouxWebPackPlugin {
  public output: string;
  public page: string;
  public filename: string;
  public lazyImport: string;

  constructor({ page, output, filename, lazyImport }: UxPlugin.PluginParams) {
    if (!page || !output || !lazyImport) {
      throw new Error("`params(page,output,lazyImport) not undefined`");
    }
    this.filename = filename || "router.js";
    this.page = page;
    this.output = output || ".";
    this.lazyImport = lazyImport;
  }

  apply(compiler: any) {
    // watchRun 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
    // 在自动编译前生成路由映射表
    compiler.hooks.watchRun.tapAsync(
      "RouterPlugin",
      (compilation: any, callback: any) => {
        this.buildRouter();
        callback();
      }
    );

    // 在构建项目时生成路由映射表
    compiler.hooks.beforeRun.tapAsync(
      "RouterPlugin",
      (compilation: any, callback: any) => {
        this.buildRouter();
        callback();
      }
    );
  }

  buildRouter() {
    commandExec(this);
  }
}
