"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouxVitePlugin = void 0;
const common_1 = require("./common");
function RouxVitePlugin(params) {
    if (!params.page || !params.output || !params.lazyImport) {
        throw new Error("`params(page,output,lazyImport) not undefined`");
    }
    return {
        name: "RouterPlugin",
        buildStart() {
            buildRouter(params);
        },
        handleHotUpdate() {
            buildRouter(params);
        },
    };
}
exports.RouxVitePlugin = RouxVitePlugin;
function buildRouter(params) {
    (0, common_1.commandExec)(params);
}
// module.exports = { AutoRouterVitePlugin };
