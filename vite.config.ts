import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import pkg from "./package.json";
import { rmSync } from "fs";
import { join } from "path";

rmSync("dist", { recursive: true, force: true }); // v14.14.0

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  // TODO: Remove this hack once https://github.com/electron-vite/vite-plugin-electron/issues/37 gets fixed
  const env = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...env };

  return {
    plugins: [
      vue(),
      electron({
        main: {
          entry: "electron/main/index.ts",
          vite: {
            build: {
              outDir: "dist/electron/main",
            },
            define: {
              "process.env.VITE_APP_HOSTNAME": JSON.stringify(
                env.VITE_APP_HOSTNAME
              ),
              "process.env.VITE_APP_WS_PORT": JSON.stringify(
                env.VITE_APP_WS_PORT
              ),
            },
          },
        },
        preload: {
          input: {
            index: join(__dirname, "electron/preload/index.ts"),
          },
          vite: {
            build: {
              sourcemap: "inline",
              outDir: "dist/electron/preload",
            },
          },
        },
        renderer: {},
      }),
    ],
    server: {
      host: pkg.env.VITE_DEV_SERVER_HOST,
      port: pkg.env.VITE_DEV_SERVER_PORT,
    },
    build: {
      target: "esnext",
    },
  };
});
