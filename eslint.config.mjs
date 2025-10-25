import configs from './index.mjs';

const config = [
    ...configs.coreConfig(),
    {
        files: ['package.json'],
        rules: {
            'package-json-dependencies/duplicate-dependencies': 'off',
        }
    }
];

export default config;
