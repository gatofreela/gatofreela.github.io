// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "build",
  build: {
    sourcemap: false,
  },
  server: {
    port: 8080,
    host: false,
  },

  integrations: [
    react({ experimentalReactChildren: true, include: ["**/react/*"] }),
  ],
});
