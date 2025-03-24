import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".", // Set the root to the project root directory
  publicDir: "public", // Ensure the publicDir is correctly configured
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
