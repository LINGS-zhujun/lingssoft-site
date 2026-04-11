import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lingssoft-site/",
  resolve: {
    alias: {
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      layouts: fileURLToPath(new URL("./src/layouts", import.meta.url)),
      context: fileURLToPath(new URL("./src/context", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      examples: fileURLToPath(new URL("./src/examples", import.meta.url)),
      routes: fileURLToPath(new URL("./src/routes", import.meta.url)),
      App: fileURLToPath(new URL("./src/App.jsx", import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: "build-vite",
  },
});
