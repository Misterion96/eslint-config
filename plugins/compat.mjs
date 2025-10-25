import compat from "eslint-plugin-compat";

const config = [
    compat.configs["flat/recommended"],
    {
        files: [
            '**/*.spec.ts', '**/*.spec.tsx',
            '**/*.spec.js', '**/*.spec.jsx',
            '**/*.test.ts', '**/*.test.tsx',
            '**/*.test.js', '**/*.test.jsx',
        ],
        rules: {
            'compat/compat': 'off'
        }
    }
];

export default config
