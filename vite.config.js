import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), imagetools(), purgeCss()],
	server: {
		open: true,
		port: 3000
	}
};

export default config;
