import { defineConfig } from "oxlint";

export default defineConfig({
   plugins: ["import", "typescript"],
   options: {
      typeAware: true,
   },
   env: {
      builtin: true,
   },
   ignorePatterns: ["dist/*"],
});
