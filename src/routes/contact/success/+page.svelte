<script lang="ts">
	import { goto } from '$app/navigation';
	import { keyedRoutes } from '$lib/config';
	import { navigatedFromFormSubmit } from '$lib/stores/navigation';
	import { onDestroy, onMount } from 'svelte';

	const goHome = () => {
		goto(keyedRoutes.home.url);
	};

	let count = 3;
	let interval: NodeJS.Timer;

	$: {
		if (count !== 0) changeInterval();
		else goHome();
	}

	const changeInterval = () => {
		interval = setTimeout(() => {
			count--;
		}, 1000);
	};
	onDestroy(() => {
		clearTimeout(interval);
		navigatedFromFormSubmit.set(false);
	});

	onMount(() => {
		if (!$navigatedFromFormSubmit) {
			goHome();
		}
	});
</script>

{#if $navigatedFromFormSubmit}
	<div class="flex h-screen items-center justify-center flex-col">
		<h1>Horrayyy!! Form submitted!</h1>
		<br />
		<h2>Redirecting to homepage in {count}</h2>
	</div>
{/if}
