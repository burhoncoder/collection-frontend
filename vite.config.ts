import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			application: resolve(__dirname, "src", "application"),
			assets: resolve(__dirname, "src", "assets"),
			core: resolve(__dirname, "src", "core"),
			infrastructure: resolve(__dirname, "src", "infrastructure"),
			shared: resolve(__dirname, "src", "shared"),
			ui: resolve(__dirname, "src", "ui"),
		},
	},
});
