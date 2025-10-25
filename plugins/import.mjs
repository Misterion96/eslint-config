import importEslint from 'eslint-plugin-import';

/**
 * @type {import('eslint').Linter.Config}
 */

const importConfig = [
  importEslint.flatConfigs.recommended,
  importEslint.flatConfigs.warnings,
  importEslint.flatConfigs.errors,
  {
    name: '@dolgikh-maks-configs/eslint-config/import',
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['**/*.ts', '**/*.tsx'],
      },
      'import/resolver': {
        node: true,
        typescript: {
          alwaysTryTypes: true,
          project: 'tsconfig.eslint.json',
        },
      },
    },
    rules: {
      'import/no-mutable-exports': 'error',
      'import/first': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'type',
            'object',
          ],

          pathGroups: [
            {
              pattern: './*.+(css|scss)',
              group: 'index',
              position: 'after',
            },
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],

          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          warnOnUnassignedImports: true,

          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/max-dependencies': [
        'error',
        {
          max: 15,
          ignoreTypeImports: true,
        },
      ],
      'import/no-absolute-path': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-duplicates': 'error',
      'import/no-cycle': [
        'error',
        {
          maxDepth: 3,
        },
      ],
      'import/no-relative-packages': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-unresolved': 'error',
      'import/named': 'off'
    },
  },
  {
    name: '@dolgikh-maks-configs/eslint-config/import/default-export-only-tsx',
    files: ['**/*.tsx'],
    rules: {
      'import/prefer-default-export': [
        'error',
        {
          target: 'single',
        },
      ],
    },
  },
];

export default importConfig;
