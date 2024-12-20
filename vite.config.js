import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//const backendUrl = import.meta.env.VITE_BACKEND_URL;

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "https://174.138.25.160:4000/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
