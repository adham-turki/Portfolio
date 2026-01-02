// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Remove or comment out this section if you don't want to exclude the module
    // rollupOptions: {
    //   external: ['@sanity/client'],
    // },
  },
});
