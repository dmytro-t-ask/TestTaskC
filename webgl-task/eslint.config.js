import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintImport from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    globalIgnores([ 'dist' ]),
    {
        files: [ '**/*.{js,ts,tsx}' ],
        plugins: {
            import: eslintImport
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        rules: {
            semi: [ 'error', 'always' ],
            quotes: [ 'error', 'single' ],
            indent: [ 'error', 4 ],
            'no-tabs': 'error',
            '@typescript-eslint/no-empty-object-type': 'off',
            'array-bracket-spacing': [ 'error', 'always' ],
            'object-curly-spacing': [ 'error', 'always' ],
            'import/order': [ 'error', {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type'
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            } ],
            'import/newline-after-import': [ 'error', { count: 1 } ]
        }
    },
]);
