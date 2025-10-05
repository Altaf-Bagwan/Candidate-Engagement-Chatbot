import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // ⭐ NEW: Allow access from outside container
    port: 5173, // ⭐ NEW: Explicitly set port
    proxy: {
      "/api": {
        target: "http://backend:3001", // ⭐ CHANGED: Use container name
        changeOrigin: true,
      },
    },
  },
});
