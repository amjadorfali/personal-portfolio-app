<script lang="ts">
	import { page } from '$app/stores';

	export let key = '';

	$: {
		if (typeof gtag !== 'undefined' && key) {
			gtag('config', key, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	{#if key}
		<script defer src="https://www.googletagmanager.com/gtag/js?id=G-CEBHNLTG7S">
		</script>

		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', 'G-CEBHNLTG7S');
		</script>
	{/if}
</svelte:head>
