import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Brotli compression (better than gzip for text-based files)
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024, // only compress files >1KB
      deleteOriginFile: false, // keep original uncompressed files too
    }),
    // Optional: also output gzip for browsers without Brotli
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024,
      deleteOriginFile: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // stop warnings for larger chunks
  },
  assetsInclude: ["**/*.JPG"],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
