import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: {
				plugins: [tailwind, autoprefixer]
			}
		})
	],

	kit: {
		adapter: adapter(),
		alias: {},
		appDir: '_app',

		csp: {
			mode: 'auto',
			directives: {
				'default-src': undefined
				// ...
			}
		},
		env: {
			publicPrefix: 'PUBLIC_'
		},
		files: {
			assets: 'static',
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker'
		},
		inlineStyleThreshold: 0,

		moduleExtensions: ['.js', '.ts'],
		outDir: '.svelte-kit',

		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			concurrency: 1,
			crawl: true,
			entries: ['*'],
			origin: 'http://sveltekit-prerender'
		},
		serviceWorker: {
			register: true,
			files: (filepath) => !/\.DS_Store/.test(filepath)
		},
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
