// const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

/** @type {import('postcss-load-config').Config} */
module.exports = {
	plugins: [
		require('tailwindcss'),
		require('tailwindcss/nesting'),
		require('autoprefixer'),

		cssnano({
			preset: 'default'
		}),
		// purgecss({
		// 	content: ['./**/*.html'],

		// })
	]
};
