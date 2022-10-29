<script context="module" lang="ts">
	import { fade } from 'svelte/transition';

	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<main in:fade="{{ duration: 1000 }}">
	<section>
		<h6>Amjad Orfali</h6>
		<h1>Website Developer & Software Engineer</h1>
	</section>
</main>

<style>
</style>
