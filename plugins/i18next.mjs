import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config} */

const config = {
  name: '@dolgikh-maks-configs/eslint-config/i18next',
  files: ['**/*.{ts,js,tsx,jsx}'],
  ignores: ['**/*.stories.tsx', '**/*.spec.tsx', '**/*.spec.ts', '**/*.test.tsx', '**/*.test.ts'],
  plugins: {
    i18next
  },
  rules: {
    'i18next/no-literal-string': [2],
  },
};

export default config;
