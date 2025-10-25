import cssModulesPlugin from 'eslint-plugin-css-modules';

/** @type {import('eslint').Linter.Config} */

const config = {
  name: '@dolgikh-maks-configs/eslint-config/css-modules',
  plugins: {
    'css-modules': cssModulesPlugin,
  },
  rules: {
    'css-modules/no-unused-class': [2, { 'camelCase': true }],
    'css-modules/no-undef-class': [2, { 'camelCase': true }],
  },
};

export default config;
