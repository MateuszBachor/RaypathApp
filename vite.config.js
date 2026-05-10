import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { fileURLToPath } from "url";


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: "./tailwind.config.cjs",
        }),
        autoprefixer(),
      ],
    },
  },
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true, // Ważne dla WSL/Docker
    },
  },
});
