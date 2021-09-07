module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 2,
    'no-unused-vars': ['warn', { varsIgnorePattern: '_\d*' }],
    '@typescript-eslint/member-ordering': ['error'],
    quotes: 'off',
    '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true }],
  },
};
