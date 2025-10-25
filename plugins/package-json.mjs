import {configs} from 'eslint-plugin-package-json';

/**
 * @type {import('eslint').Linter.Config}
 */

const config = {
  ...configs.recommended,
  name: '@dolgikh-maks-configs/eslint-config/package-json',
  rules: {
    ...configs.recommended.rules,
    'package-json/order-properties': [
      'error',
      {
        order: 'sort-package-json',
      },
    ],
    'package-json/sort-collections': [
      'error',
      ['dependencies', 'peerDependencies', 'devDependencies'],
    ],
    'package-json/valid-version': ['error'],
    'package-json/valid-local-dependency': ['error'],
    'package-json/require-files': ['error'],
    'package-json/require-author': ['error'],
    'package-json/require-keywords': ['error'],
  },
};

export default config;
