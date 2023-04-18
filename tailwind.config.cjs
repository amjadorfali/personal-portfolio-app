/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	plugins: [require('@tailwindcss/forms'), ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],

	darkMode: 'class',
	theme: {
		extend: {}
	},
	variants: {}
};
