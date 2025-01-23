// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "build",
  server: {
    port: 8080,
    host: true,
  },
});
