import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@context": path.resolve(__dirname, "./src/context"),
        "@firebase_connection": path.resolve(
          __dirname,
          "./src/firebase connection"
        ),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@services": path.resolve(__dirname, "./src/services"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
    plugins: [react()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
