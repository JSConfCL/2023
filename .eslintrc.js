module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:import/recommended",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "react/react-in-jsx-scope": ["off"],
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/strict-boolean-expressions": ["off"],
    "@typescript-eslint/no-non-null-assertion": ["off"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["off"],
    "@next/next/no-img-element": ["off"],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "import/no-named-as-default": 0,
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        alphabetize: { order: "asc" },
      },
    ],
  },
};
