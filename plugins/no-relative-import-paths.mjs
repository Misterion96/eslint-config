import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  name: '@dolgikh-maks-configs/eslint-config/no-relative-import-paths',
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['**/apps/*-e2e/**', '**/vite.config.ts', '**/*.spec.ts', '**/*.spec.tsx'],
  plugins: {
    'no-relative-import-paths': noRelativeImportPaths,
  },
  rules: {
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      {
        allowSameFolder: true,
        allowedDepth: 1,
        prefix: '@',
        rootDir: '.',
      },
    ],
  },
};

export default config;
