import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

/** @type { import("eslint").Linter.FlatConfig[] } */
export default [
  {
    files: ["**/*.{ts,tsx,js}"],
    ignores: ["node_modules/**/*", ".yarn/**/*", "dist/**/*"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: typescriptParser,
      globals: { ...globals.node, ...globals.es2021 },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      "prettier/prettier": "error",
      ...typescriptEslintPlugin.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
      eqeqeq: ["error", "always", { null: "ignore" }],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "no-undef": "error",
      "no-unsafe-negation": "error",
      "default-case": "error",
      "no-unused-vars": "off",
      "no-useless-return": "error",
      "prefer-regex-literals": "error",
      curly: "error",
      "object-shorthand": "error",
      "no-cond-assign": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      yoda: "error",
      "no-negated-condition": "error",
      "max-params": ["error", 3],
      "prefer-const": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "no-useless-call": "error",
      "no-useless-catch": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "off",
      "no-nested-ternary": "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: ["const", "let"], next: "*" },
        { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
        { blankLine: "always", prev: "*", next: "function" },
        { blankLine: "always", prev: "function", next: "*" },
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "no-useless-rename": ["error", { ignoreDestructuring: false, ignoreExport: false, ignoreImport: false }],
    },
  },
];
