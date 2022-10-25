

const plugin = require("@roux/plugin")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "../src/index.html"),
    filename: "./index.html",
});
const routePlugin = new plugin.RouxWebPackPlugin({
    page: path.join(__dirname, "../src/pages"),
    output: path.join(__dirname, "../src"),
    filename: "routeConfig.ts",
    lazyImport: "import {lazy} from 'react';"
});

const rules = [
    {
        test: /\.css/,
        use: [
            "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: true,
                },
            },
        ],
    },
    {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-transform-runtime',
                    '@babel/plugin-proposal-class-properties',
                ],
            },
        },
        exclude: /node_modules/,
    },
    {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",

    },
];

module.exports = {
    entry: {
        app: path.join(__dirname, "../src/app.tsx"),
    },
    output: {
        path: path.join(__dirname, "../build"),
        filename: "index.js",
        //libraryTarget: "commonjs2",
    },
    module: {
        rules: rules,
    },
    plugins: [htmlWebpackPlugin, routePlugin],
    resolve: {
        alias: {
            "@": path.resolve('../src')
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        port: 9000,
        compress: true,
    },
};
