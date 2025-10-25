import {swapWarnToError} from './helpers/index.mjs';
import compatConfig from './plugins/compat.mjs';
import cssModules from './plugins/css-modules.mjs';
import eslintConfig from './plugins/eslint.mjs';
import i18nJson from './plugins/i18n-json.mjs';
import i18nextConfig from './plugins/i18next.mjs';
import importConfig from './plugins/import.mjs';
import noRelativeImportPaths from './plugins/no-relative-import-paths.mjs';
import packageJsonDeps from './plugins/package-json-dependencies.mjs';
import packageJson from './plugins/package-json.mjs';
import react from './plugins/react.mjs';
import todoPlz from './plugins/todo-plz.mjs';
import typescriptPluginConfig from './plugins/typescript.mjs';

/**
 * @typedef {import('eslint').Linter.Config}
 */

/**
* @return Config[]
*/

const coreConfig = () => {
  return swapWarnToError([
    ...eslintConfig,
    ...importConfig,
    ...compatConfig,
    todoPlz,
    packageJson,
    packageJsonDeps,
  ])
}

/**
 * @return Config[]
 */

const typescriptConfig = () => {
  return swapWarnToError([
    ...typescriptPluginConfig,
    noRelativeImportPaths,
  ])
}

/**
 * @return Config[]
 */

const reactConfig = () => {
  return swapWarnToError([
    ...react,
    cssModules,
  ])
}

/**
 * @return Config[]
 */

const i18nConfig = () => {
  return swapWarnToError([
    i18nJson(),
    i18nextConfig,
  ])
}

const configs = {
  coreConfig,
  typescriptConfig,
  reactConfig,
  i18nConfig
};

export default configs
