import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
//import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  //root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': '/src',
      //'~coreui': resolve(__dirname, 'node_modules/@coreui/coreui'),
    },
  },
  server: {
    port: 8080,
  },
});