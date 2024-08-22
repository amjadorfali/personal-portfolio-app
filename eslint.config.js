import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		rules: {
			'svelte/no-at-html-tags': 'warn'
		}
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		ignores: [
			'build/',
			'.svelte-kit/',
			'dist/',
			'/build',
			'/.svelte-kit',
			'.DS_Store',
			'node_modules',
			'package',
			'.env',
			'.env.*',
			'!.env.example',
			'/src/lib/analytics/*',
			'/src/routes/analytics/*',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
			'.netlify/'
		]
	}
];
