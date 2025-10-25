// @ts-check
import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';

/**
 * @type {import('typescript-eslint').Config}
 */

const config = tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],
  name: '@dolgikh-maks-configs/eslint-config/eslint-react',
  extends: [
    eslintReact.configs.all,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      project: true,
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  rules: {
    '@eslint-react/prefer-destructuring-assignment': 'error',
    '@eslint-react/no-leaked-conditional-rendering': 'error',
    '@eslint-react/no-complex-conditional-rendering': 'error',
    '@eslint-react/prefer-shorthand-boolean':'error',
    '@eslint-react/prefer-shorthand-fragment':'error',
    // off
    '@eslint-react/avoid-shorthand-boolean': 'off',
    '@eslint-react/avoid-shorthand-fragment': 'off',
    '@eslint-react/naming-convention/filename': 'off',
    '@eslint-react/no-clone-element': 'off',
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-layout-effect': 'off',
    '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'off',
  },
});

export default config;
