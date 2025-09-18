import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  const plugins = [react()];
  if (mode === "development") {
    plugins.push(componentTagger());
  }

  return {
    server: {
      host: "::",
      port: 8080,
      fs: {
        strict: false,
      },
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, "index.html"),
      },
    },
  };
});
