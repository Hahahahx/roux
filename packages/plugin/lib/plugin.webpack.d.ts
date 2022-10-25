export declare class RouxWebPackPlugin {
    output: string;
    page: string;
    filename: string;
    lazyImport: string;
    constructor({ page, output, filename, lazyImport }: UxPlugin.PluginParams);
    apply(compiler: any): void;
    buildRouter(): void;
}
