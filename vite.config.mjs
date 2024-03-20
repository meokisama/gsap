import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";
import jsconfigPaths from "vite-jsconfig-paths";

export default defineConfig({
    server: {
        open: true,
    },
    build: {
        outDir: "build",
    },
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
                // ...svgr options (https://react-svgr.com/docs/options/)
            },
        }),
        jsconfigPaths(),
    ],
});