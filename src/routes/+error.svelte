<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { onDestroy } from 'svelte';

	let count = 3;
	/* eslint-disable @typescript-eslint/no-explicit-any */
	let interval: any;
	$: {
		if (count !== 0) changeInterval();
		else goto('/');
	}

	const changeInterval = () => {
		interval = setTimeout(() => {
			count--;
		}, 1000);
	};
	onDestroy(() => clearTimeout(interval));
</script>

<!-- {@debug count} -->

<div class="flex h-screen items-center justify-center flex-col">
	<h1>Page {$page.error?.message}</h1>
	<br />
	<h2 class="h2">Redirecting to homepage in {count}</h2>
</div>
