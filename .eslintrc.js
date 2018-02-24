module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "compat/compat": "warn"
  },
  plugins: ["compat"]
};
