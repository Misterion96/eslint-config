import typescriptEslint from 'typescript-eslint';

const files = ['**/*.tsx', '**/*.ts'];

const tsconfig = typescriptEslint.config(
  ...typescriptEslint.configs.stylisticTypeChecked,
  ...typescriptEslint.configs.strictTypeChecked,
).map(config => ({ ...config, files }))

const typescriptConfig = [
  ...tsconfig,
  {
    name: '@dolgikh-maks-configs/eslint-config/typescript',
    files,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-confusing-void-expression': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-use-before-define": "error"
    },
  },
  {
    files: ['**/*.spec.tsx', '**/*.spec.ts'],
    name: '@dolgikh-maks-configs/eslint-config/typescript/spec',
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/unbound-method': 'off',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    name: '@dolgikh-maks-configs/eslint-config/typescript/storybook',
    rules: {
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];

export default typescriptConfig;
