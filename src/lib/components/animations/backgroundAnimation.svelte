<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';

	import { routeFromUrl, routes } from '$lib/config';
	import { animateAmbience, blinkIcons, calculatePlanetX, routeConfig, starIcons } from './helpers/animations';

	let renderPlanets = false;
	onMount(async () => {
		renderPlanets = true;
		await tick();
		calculatePlanetX($page.route.id);
		animateAmbience({ wrapper: '.main-wrapper', childrenKeys: ['.blink-icon', '.star-icon'] });
	});

	afterNavigate((nav) => {
		const prevRoute = routeFromUrl(nav.from?.route.id);
		const nextRoute = routeFromUrl(nav.to?.route.id);
		if (nextRoute && prevRoute && nextRoute.url !== prevRoute.url) calculatePlanetX(nextRoute.url, prevRoute.url);
	});
</script>

<div class="w-full h-full z-[-10] main-wrapper absolute overflow-hidden">
	{#if renderPlanets}
		{#each blinkIcons as { icon: Icon }}
			<Icon className={`blink-icon absolute `} style={`top:${Math.floor(Math.random() * 91) + 5}vh; `} />
		{/each}
	{/if}

	{#each starIcons as { icon: Icon }}
		<Icon className={`star-icon absolute`} style={`top:${Math.floor(Math.random() * 91) + 5}vh; right : ${Math.floor(Math.random() * 100)}vw;`} />
	{/each}

	{#if renderPlanets}
		<div class="flex relative  w-full h-full items-end">
			{#each Object.entries(routeConfig) as [routeKey, config]}
				<svelte:component this={config.planet} className={`${routeKey}-planet-icon absolute bottom-16  w-52 h-52 sm:w-80 sm:h-80 sm:bottom-24`} />
			{/each}
		</div>
	{/if}
</div>

<style>
	:global(.blink-icon) {
		filter: brightness(2);
		border-radius: 50%;
	}
</style>
