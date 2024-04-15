import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
