import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      pages: path.resolve("src/pages/"),
      src: path.resolve("src/"),
      utils: path.resolve("src/utils"),
      ui: path.resolve("src/ui"),
      modules: path.resolve("src/modules"),
      assets: path.resolve("src/assets"),
    },
  },
  plugins: [react(), tailwindcss()],
});
