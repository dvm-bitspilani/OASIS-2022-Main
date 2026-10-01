import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";

export default defineConfig({
  plugins: [react(), {
    name: "edition-deployment-files",
    generateBundle() {
      this.emitFile({ type: "asset", fileName: "_headers", source: readFileSync(new URL("./public/_headers", import.meta.url), "utf8") });
      const licenses = ["./src/Assets/Fonts/LICENSE.txt", ...["allura", "mulish", "montserrat"].map(font => `./node_modules/@fontsource/${font}/LICENSE`)]
        .map(file => `${file}\n\n${readFileSync(new URL(file, import.meta.url), "utf8")}`).join("\n\n");
      this.emitFile({ type: "asset", fileName: "FONT-LICENSE.txt", source: licenses });
    },
  }],
  publicDir: false,
  build: { sourcemap: false, assetsInlineLimit: 2048 },
});
