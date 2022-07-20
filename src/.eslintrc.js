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
};
