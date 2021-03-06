module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      './tsconfig.json',
      './tsconfig.eslint.json'
    ]
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'standard-with-typescript'
  ],
  // These are Standard.js overrides, for rules that don't play well with
  // Feathers.js auto-generated code
  rules: {
    '@typescript-eslint/space-before-function-paren': ["error", "never"],
    "allowTypedFunctionExpressions": true,
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/promise-function-async': 'off'
  }
}
