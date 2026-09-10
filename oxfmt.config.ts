import { defineConfig } from "oxfmt";

export default defineConfig({
   printWidth: 100,
   semi: true,
   tabWidth: 3,
   trailingComma: "all",

   sortImports: {
      internalPattern: ["~"],
      newlinesBetween: true,
      groups: [
         "side_effect",
         "builtin",
         "external",
         "internal",
         { newlinesBetween: false },
         ["parent", "sibling", "index"],
         ["side_effect_style", "style"],
         "unknown",
      ],
   },

   sortPackageJson: {
      sortScripts: true,
   },

   ignorePatterns: ["**/*.md"],
});
