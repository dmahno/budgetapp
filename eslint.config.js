import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'vite.config.ts',
      'vitest.config.ts',
      'src/types/',
      'coverage',
    ],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      'import/no-unresolved': [
        2,
        {ignore: ['\\.svg$', '^idb$', '^dateformat$']},
      ],
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      'import/no-cycle': [2, {maxDepth: 1}],
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal'],
          'newlines-between': 'always',
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector:
            'ImportDeclaration[source.value=/\\.s?css$/i] ~ ImportDeclaration[source.value!=/\\.s?css$/i]',
          message: 'Импорты стилей всегда должны идти последними',
        },
        {
          selector: 'TSInterfaceDeclaration[id.name!=/^I[^a-z]+/]',
          message:
            'Все интерфейсы должны начинаться с I, чтобы не было путанницы с классами при чтении кода',
        },
        {
          selector: 'TSTypeAliasDeclaration[id.name!=/^T[^a-z]+/]',
          message:
            'Все типы должны начинаться с T, чтобы не было путанницы с классами при чтении кода',
        },
      ],
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', './src'],
            ['app', './src/app'],
            ['entities', './src/entities'],
            ['pages', './src/pages'],
            ['shared', './src/shared'],
            ['assets', './src/assets'],
            ['styles', './src/styles'],
            ['widgets', './src/widgets'],
            ['features', './src/features'],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
        },
      },
    },
  },
);
