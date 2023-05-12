module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["/*.js", "/*.cjs"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "jsx-a11y", "react-hooks"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-console": "error",
    "no-restricted-imports": "warn",
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        name: "react-redux",
        importNames: ["useSelector", "useDispatch"],
        message:
          "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "no-unused-vars": "error",
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
      },
    },
    {
      files: ["*index.ts"],
      rules: {
        "@typescript-eslint/no-restricted-imports": "off",
      },
    },
  ],
};
