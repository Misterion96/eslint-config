import i18nJsonPlugin from 'eslint-plugin-i18n-json';

const config = ({patterns = ['**/messages.json']} = {}) => {
  return {
    name: '@dolgikh-maks-configs/eslint-config/i18n-json',
    files: patterns,
    plugins: { 'i18n-json': i18nJsonPlugin },
    processor: {
      meta: { name: '.json' },
      ...i18nJsonPlugin.processors['.json'],
    },
    rules: {
      ...i18nJsonPlugin.configs.recommended.rules,
      'no-irregular-whitespace': 'off',
    },
  }
};

export default config
