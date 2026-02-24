import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const defaultBase = process.env.NODE_ENV === "production" ? "/sirina/" : "/";

export default defineConfig({
  base: process.env.BASE_PATH || defaultBase,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
  },
});
