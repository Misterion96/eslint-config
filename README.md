# Eslint configs by Maks Dolgikh

## Installing

```shell
npm i -D @dolgikh-maks/eslint-config
```

## Example of usage

### For all cases - `coreConfig`

```js
import configs from '@dolgikh-maks/eslint-config';

export default configs.coreConfig()
```

---

### For Typescript Projects - `typescriptConfig`

`eslint.config.mjs`
```js
import configs from '@dolgikh-maks/eslint-config';

export default [
    ...configEslint.coreConfig(),
    ...configs.typescriptConfig(),
    {
        settings: {
            'import/resolver': {
                node: true,
                typescript: {
                    alwaysTryTypes: true,
                    project: 'tsconfig.eslint.json',
                },
            },
        },
        languageOptions: {
            ecmaVersion: 'latest',
            parserOptions: {
                projectService: true,
                parser: '@typescript-eslint/parser',
                tsconfigRootDir: import.meta.dirname,
                project: 'tsconfig.eslint.json',
                createDefaultProgram: true,
            },
        },
    },
]
```

`tsconfig.eslint.json`

```json
{
  "extends": "./tsconfig.base.json",
  "include": [
    "**/*.ts"
  ]
}
```


### For React projects - `reactConfig`

`eslint.config.mjs`
```js
import configs from '@dolgikh-maks/eslint-config';

export default [
    ...configEslint.coreConfig(),
    ...configs.typescriptConfig(),
    ...configs.reactConfig(),
    {
        settings: {
            'import/resolver': {
                node: true,
                typescript: {
                    alwaysTryTypes: true,
                    project: 'tsconfig.eslint.json',
                },
            },
        },
        languageOptions: {
            ecmaVersion: 'latest',
            parserOptions: {
                projectService: true,
                parser: '@typescript-eslint/parser',
                tsconfigRootDir: import.meta.dirname,
                project: 'tsconfig.eslint.json',
                createDefaultProgram: true,
            },
        },
    },
]
```

`tsconfig.eslint.json`

```json
{
  "extends": "./tsconfig.base.json",
  "include": [
    "**/*.ts",
    "**/*.tsx"
  ]
}
```
