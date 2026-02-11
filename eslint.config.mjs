// <== IMPORTS ==>
import nextTs from "eslint-config-next/typescript";
import nextVitals from "eslint-config-next/core-web-vitals";
import { defineConfig, globalIgnores } from "eslint/config";

// <== ESLINT CONFIGURATION ==>
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // GLOBAL IGNORES
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  // CUSTOM RULES
  {
    rules: {
      "react-hooks/incompatible-library": "off",
    },
  },
]);

// <== EXPORTING ESLINT CONFIGURATION ==>
export default eslintConfig;
