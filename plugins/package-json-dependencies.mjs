import packageJsonDeps from 'eslint-plugin-package-json-dependencies';

/** @type {import('eslint').Linter.Config} */

const config = {
  files: ['**/package.json'],
  name: '@dolgikh-maks-configs/eslint-config/package-json-dependencies',
  languageOptions: {
    parser: packageJsonDeps,
  },
  'plugins': {
    'package-json-dependencies': packageJsonDeps,
  },
  rules: {
    'package-json-dependencies/controlled-versions': ['error', {
      granularity: {
        dependencies: 'fixed',
        devDependencies: 'fixed',
        peerDependencies: 'minor',
        optionalDependencies: 'minor'
      },
      excludePatterns: []
    }],
    'package-json-dependencies/duplicate-dependencies': 'error',
    'package-json-dependencies/alphabetically-sorted-dependencies': 'error',
    'package-json-dependencies/valid-versions': 'error'
  },
};

export default config;
