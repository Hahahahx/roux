import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { RouxVitePlugin } from "@roux/plugin"
// const plugin = require("../lib/plugin")

// https://vitejs.dev/config/
export default defineConfig({
    root: path.join(__dirname, "../src"),
    plugins: [
        react(),
        // legacy({ targets: ["defaults", "not IE 11"] }),
        RouxVitePlugin({
            page: path.join(__dirname, "../src/pages"),
            output: path.join(__dirname, "../src"),
            filename: "routeConfig.ts",
            lazyImport: "import {lazy} from 'react';"
        }),
    ],
    build: {
        outDir: path.join(__dirname, "../build"),
        emptyOutDir: true,
    },
    // server:{
    //   proxy:{
    //     '/api':{
    //       target:"https://jim.jx.cn/design",
    //       rewrite:(path)=>{
    //         return path.replace(/^\/api/, '')
    //       },
    //       changeOrigin:true, 
    //     }
    //   }
    // }
});
