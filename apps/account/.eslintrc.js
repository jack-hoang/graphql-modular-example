module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*'],
  overrides: [
    {
      files: ['*.ts', '*.js'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'no-console': 'error',
        'linebreak-style': 'off',
        'import/prefer-default-export': 'off',
        'max-len': [
          'error',
          120,
          2,
          {
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreUrls: true,
            ignorePattern: '^\\s*_*',
          },
        ],
        radix: ['error', 'as-needed'],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
};
