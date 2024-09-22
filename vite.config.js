// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Remove or comment out this section if you don't want to exclude the module
    // rollupOptions: {
    //   external: ['@sanity/client'],
    // },
  },
});
