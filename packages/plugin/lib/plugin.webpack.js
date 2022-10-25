"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouxWebPackPlugin = void 0;
const common_1 = require("./common");
class RouxWebPackPlugin {
    constructor({ page, output, filename, lazyImport }) {
        if (!page || !output || !lazyImport) {
            throw new Error("`params(page,output,lazyImport) not undefined`");
        }
        this.filename = filename || "router.js";
        this.page = page;
        this.output = output || ".";
        this.lazyImport = lazyImport;
    }
    apply(compiler) {
        // watchRun 是异步 hook，使用 tapAsync 触及它，还可以使用 tapPromise/tap(同步)
        // 在自动编译前生成路由映射表
        compiler.hooks.watchRun.tapAsync("RouterPlugin", (compilation, callback) => {
            this.buildRouter();
            callback();
        });
        // 在构建项目时生成路由映射表
        compiler.hooks.beforeRun.tapAsync("RouterPlugin", (compilation, callback) => {
            this.buildRouter();
            callback();
        });
    }
    buildRouter() {
        (0, common_1.commandExec)(this);
    }
}
exports.RouxWebPackPlugin = RouxWebPackPlugin;
