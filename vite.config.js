// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  build: {
    sourcemap: true,
    // Remove or comment out this section if you don't want to exclude the module
    // rollupOptions: {
    //   external: ['@sanity/client'],
    // },
  },
  esbuild: {
    target: 'es2015',
    drop: ['console', 'debugger'],
  },
});
