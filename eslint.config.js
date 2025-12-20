import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

export default [
    js.configs.recommended,
    {
        ignores: [
            'node_modules/**',
            '.next/**',
            'out/**',
            'build/**',
            'dist/**',
            '*.config.js',
            'next-env.d.ts',
            'public/**',
        ],
    },
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            '@typescript-eslint': typescript,
            react: react,
            'react-hooks': reactHooks,
            '@next/next': nextPlugin,
        },
        rules: {
            ...typescript.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...nextPlugin.configs.recommended.rules,
            ...nextPlugin.configs['core-web-vitals'].rules,
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'no-undef': 'off',
            'no-console': 'warn',
            'no-debugger': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
        },
        settings: {
            react: { version: 'detect' },
        },
    },
];
