import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const isDev = process.env.NODE_ENV === "development";
const plugins = [vue()];

if (isDev) {
  const vueDevTools = require("vite-plugin-vue-devtools").default;
  plugins.push(vueDevTools());
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
