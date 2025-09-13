import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
    recommendedConfig: js.configs.recommended,
});

export default [
    js.configs.recommended,

    ...compat.extends('next/core-web-vitals'),

    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'dist/**',
            '*.config.js',
            '*.config.mjs',
            'public/**',
            '.env*',
            '.github',
        ],
    },

    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                global: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            react: react,
            'react-hooks': reactHooks,
            '@next/next': nextPlugin,
        },
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-non-null-assertion': 'warn',

            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'no-console': 'warn',
            'no-debugger': 'error',
            'no-unused-vars': 'off',
            'prefer-const': 'error',
            'no-var': 'error',

            '@next/next/no-img-element': 'warn',
            '@next/next/no-html-link-for-pages': 'error',
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
