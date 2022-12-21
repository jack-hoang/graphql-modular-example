module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:import/typescript'],
      rules: {
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
      },
    },
    {
      files: '*.json',
      parser: 'jsonc-eslint-parser',
    },
  ],
};
