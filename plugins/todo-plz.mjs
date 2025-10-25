import todoPlz from 'eslint-plugin-todo-plz';

/**
 * @type {import('eslint').Linter.Config}
 */

const config = {
  files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
  name: '@dolgikh-maks-configs/eslint-config/todo-plz',
  'plugins': {
    'todo-plz': todoPlz,
  },
  'rules': {
    'todo-plz/ticket-ref': ['error', {
      'pattern': '[a-zA-Z]+-[0-9]+',
      'terms': ['FIXME', 'TODO'],
      "description": "For example: `TODO (TASK-123): remove after update`"
    }],
  },
};

export default config;
