import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
  ],
});
