import { commandExec } from "./common";

export function RouxVitePlugin(params: UxPlugin.PluginParams) {
  if (!params.page || !params.output || !params.lazyImport) {
    throw new Error("`params(page,output,lazyImport) not undefined`");
  }

  return {
    name: "RouterPlugin", // 名称用于警告和错误展示
    buildStart() {
      buildRouter(params);
    },
    handleHotUpdate() {
      buildRouter(params);
    },
  };
}

function buildRouter(params: UxPlugin.PluginParams) {
  commandExec(params);
}

// module.exports = { AutoRouterVitePlugin };
