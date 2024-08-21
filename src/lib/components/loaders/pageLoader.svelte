<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let loadingDone = false;
	let disable = false;
	const dispatchEvent = createEventDispatcher();

	const progress = tweened(0, {
		easing: cubicOut
	});

	$: loadingDone && progress.set(1, { duration: 300 });
	$: $progress === 1 && dispatchEvent('tweenDone');

	onMount(() => {
		if (loadingDone) return (disable = true);
		progress.set(0.75, { duration: 10000 });
	});
</script>

{#if !disable}
	<div>
		<h1 class="h1">
			{Math.round($progress * 100).toFixed()}%
		</h1>
	</div>
{/if}

<style>
	div {
		width: 100vw;
		height: 100vh;
		display: flex;
		align-items: center;
		place-content: center;
		overflow: hidden;
	}
</style>
