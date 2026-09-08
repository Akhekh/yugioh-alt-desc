import { rmSync, cpSync } from "node:fs";

rmSync("./dist", { recursive: true, force: true });

await Bun.build({
   entrypoints: ["./src/content.ts"],
   outdir: "./dist",
   target: "browser",
   minify: true,
});

cpSync("./public/", "./dist/", { recursive: true });
