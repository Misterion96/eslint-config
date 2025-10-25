import js from '@eslint/js';
import globals from 'globals'

const eslintConfig = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.amd,
      },
    },
    name: '@dolgikh-maks-configs/eslint-config/eslint',
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    rules: {
      'newline-before-return': 'error',

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'if',
        },
      ],
      'no-const-assign': 'error',
      'object-shorthand': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      'default-param-last': 'error',
      'no-param-reassign': 'error',
      'no-confusing-arrow': 'error',
      'no-useless-constructor': 'error',
      'no-duplicate-imports': 'error',
      'dot-notation': 'error',
      'prefer-exponentiation-operator': 'error',
      'no-multi-assign': 'error',
      eqeqeq: 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      curly: 'error',
      'no-else-return': 'error',
      'spaced-comment': 'error',
      radix: 'error',
      "no-console": ["error"],
      camelcase: ['error'],
    },
  },
];

export default eslintConfig;
