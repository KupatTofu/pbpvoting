import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

// Change the import to use your runtime specific build
import build from "@hono/vite-build/node";

export default defineConfig(({ mode }) => {
  if (mode === "client")
    return {
      esbuild: {
        jsxImportSource: "hono/jsx/dom", // Optimized for hono/jsx/dom
      },
      plugins: [
        react(), // Tambahkan plugin React di sini
      ],
      build: {
        rollupOptions: {
          input: "./src/client.tsx",
          output: {
            entryFileNames: "static/client.js",
          },
        },
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.js'], // Optional, jika perlu
      },
    };

  return {
    plugins: [
      build({
        entry: "src/index.tsx",
      }),
      devServer({
        entry: "src/index.tsx",
      }),
    ],
  };
});
