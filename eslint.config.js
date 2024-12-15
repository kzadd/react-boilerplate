import eslint from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import sortExports from 'eslint-plugin-sort-exports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/**
 * ESLint configuration.
 */
export default tseslint.config(
  {
    ignores: ['coverage', 'dist', 'node_modules'],
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...tseslint.configs.stylistic],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      prettier,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      'sort-exports': sortExports
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'after-used',
          ignoreRestSiblings: false,
          vars: 'all'
        }
      ],
      eqeqeq: ['error', 'always'],
      'jsx-quotes': ['warn', 'prefer-double'],
      'no-empty-pattern': 'warn',
      'no-var': 'error',
      'object-shorthand': ['warn', 'always'],
      'prefer-const': 'error',
      'prettier/prettier': 'error',
      'quote-props': ['warn', 'as-needed'],
      'react/display-name': 'off',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          children: 'ignore',
          props: 'never'
        }
      ],
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: false,
          ignoreCase: true,
          noSortAlphabetically: false,
          shorthandFirst: false,
          shorthandLast: false
        }
      ],
      'react/jsx-uses-react': 'off',
      'react/prop-types': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^react-dom', '^react-router-dom', '^react-redux', '^node:', '^@?\\w'],
            ['^@core', '^@mocks', '^@presentation', '^@shared', '^@tests', '^\\.']
          ]
        }
      ],
      'sort-exports/sort-exports': [
        'warn',
        {
          ignoreCase: true,
          sortDir: 'asc',
          sortExportKindFirst: 'value'
        }
      ],
      'sort-keys': [
        'warn',
        'asc',
        {
          caseSensitive: false,
          minKeys: 2,
          natural: true
        }
      ]
    }
  }
)
