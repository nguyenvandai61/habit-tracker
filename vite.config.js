import { fileURLToPath, URL } from 'node:url'
import path from 'path';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      main:  path.resolve(__dirname, 'index.html'),
      popup: path.resolve(__dirname, 'popup/index.html'),
    },
  },
})
