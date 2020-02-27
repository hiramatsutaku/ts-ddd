module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
  },
};
