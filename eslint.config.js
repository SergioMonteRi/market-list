const prettier = require('eslint-plugin-prettier')
const eslintConfigPrettier = require('eslint-config-prettier')
const tsPlugin = require('@typescript-eslint/eslint-plugin')
const tsParser = require('@typescript-eslint/parser')
const simpleImportSort = require('eslint-plugin-simple-import-sort')

module.exports = [
  {
    ignores: ['node_modules/**', '.expo/**', 'dist/**'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier,
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off', // desativado em favor da versão TypeScript
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'no-undef': 'off', // desativado — o TypeScript já cobre isso
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  eslintConfigPrettier,
]
