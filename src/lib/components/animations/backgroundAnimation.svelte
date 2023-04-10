<script lang="ts">
	import { onMount, tick } from 'svelte';

	import { routes } from '$lib/config';

	import { page } from '$app/stores';
	import { animateAmbience, blinkIcons, calculatePlanetX, routeConfig, starIcons } from './helpers/animations';
	import { afterNavigate } from '$app/navigation';

	let renderPlanets = false;
	onMount(async () => {
		renderPlanets = true;
		await tick();
		calculatePlanetX($page.route.id);
		animateAmbience({ wrapper: '.main-wrapper', childrenKeys: ['.blink-icon', '.star-icon'] });
	});

	afterNavigate((nav) => {
		const prevRoute = routes.find((v) => nav.from?.route.id === v.url);
		const nextRoute = routes.find((v) => nav.to?.route.id === v.url);
		if (nextRoute && prevRoute && nextRoute.url !== prevRoute.url) {
			calculatePlanetX(nextRoute.url, prevRoute.url);
		}
	});
</script>

<div class="w-full h-full z-[-10] main-wrapper absolute overflow-hidden">
	{#each blinkIcons as { icon: Icon }}
		<Icon className={`blink-icon absolute `} style={`top:${Math.floor(Math.random() * 91) + 5}vh; left : -10vw; `} />
	{/each}

	{#each starIcons as { icon: Icon }}
		<Icon className={`star-icon absolute`} style={`top:${Math.floor(Math.random() * 91) + 5}vh; right : ${Math.floor(Math.random() * 100)}vw;`} />
	{/each}

	{#if renderPlanets}
		<div class="flex relative  w-full h-full items-end">
			{#each Object.entries(routeConfig) as [routeKey, config]}
				<svelte:component this={config.planet} className={`${routeKey}-planet-icon absolute bottom-24`} />
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
