declare namespace UxPlugin {
  export class RouxWebPackPlugin {
    constructor(params: PluginParams);
  }

  export function RouxVitePlugin(params: PluginParams): any;

  interface RouteConfig {
    component: string;
    path: string;
    child: RouteConfig[];
  }

  interface PluginParams {
    // 输入路径
    page: string;
    // 输出路径
    output: string;
    // 输出文件名
    filename: string;
    // 默认关闭按需加载import
    lazyImport: string;
  }
}
