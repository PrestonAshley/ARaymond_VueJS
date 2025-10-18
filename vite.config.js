import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const isDev = process.env.NODE_ENV === "development";

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [vue()];
  if (isDev) {
    const { default: vueDevTools } = await import("vite-plugin-vue-devtools");
    plugins.push(vueDevTools());
  }
  return {
    plugins: [vue(), vueDevTools()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
