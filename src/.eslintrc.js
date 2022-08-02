module.exports = {
  env: {
    browser: true,
    node: false,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "ImportDeclaration[importKind!='type'][source.value=/..\\u002Felectron/]",
        message: "Must use 'import type' when importing from '../electron'.",
      },
    ],
  },
};
