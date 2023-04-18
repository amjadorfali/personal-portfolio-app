<script lang="ts">
	// ---- Should be imported first ----
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import './styles.scss';
	import './styles.css';

	// ------------------------------------
	import type { PageData } from './$types';
	import { onDestroy } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { crossfade, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { setInitialClassState } from '@skeletonlabs/skeleton';

	import { keyedRoutes } from '$lib/config';
	import { Header, InitialLoader, PageLoader, CustomDrawer } from '$lib/components';

	import FavIcon from '$lib/assets/favicon.png?w=48&h=48&webp&imagetools';

	import { Avatar } from '@skeletonlabs/skeleton';
	// import BackgroundAnimation from '$lib/components/animations/backgroundAnimation.svelte';
	import Analytics from '$lib/analytics/analytics.svelte';

	//Analytics
	export let data: PageData;
	const { key } = data;

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut,
		delay: 200
	});

	let canStartApp = $page.url.pathname !== '/',
		showContent = canStartApp;

	// ----- Navigation logic starts -----
	const navigationLimit = 500;
	let showPage = canStartApp;
	let timeout: NodeJS.Timeout;
	let timeStarted: number | undefined;

	beforeNavigate((nav) => {
		if (nav?.to?.route.id !== nav.from?.route.id) {
			showPage = false;
			clearTimeout(timeout);
			timeStarted = new Date().getTime();
		}
	});
	afterNavigate((nav) => {
		// nav.willUnload
		if (!nav.from || nav?.to?.route.id !== nav.from?.route.id) {
			const timeTook = new Date().getTime() - (timeStarted || 0);

			if (timeTook > navigationLimit) {
				clearTimeout(timeout);
				timeStarted = undefined;
				showPage = true;
			} else {
				timeout = setTimeout(() => {
					showPage = true;
				}, navigationLimit - timeTook);
			}
		}
	});

	onDestroy(() => {
		clearTimeout(timeout);
	});
	// ----- Navigation logic ends -----
</script>

<!-- Used to set Dark/Light mode on mount, as the Skeleton LightSwitch wouldn't be mounted at initial page load -->
<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>
<Analytics {key} />
<CustomDrawer />
<!-- <BackgroundAnimation /> -->
{#if canStartApp}
	<div class="bg-primary z-[0]">
		<Header>
			<a
				href={keyedRoutes.home.url}
				class="unstyled logo-wrapper grid-cols-2 gap-5 transition-all duration-150 hover:shadow-lg active:shadow-lg hover:-skew-y-3 active:-skew-y-3 hover:skew-x-3 active:skew-x-3 p-[0.3rem]"
			>
				<div in:receive={{ key: 'logo' }} on:introend={() => (showContent = true)}>
					<Avatar src={FavIcon} alt="" width="w-12" class="prevent-select " />
				</div>
				<div>
					<p class="unstyled dark:text-primary-300 text-surface-900 w-max font-bold">Amjad Orfali <br />Software Engineer</p>
				</div>
			</a>
		</Header>

		{#if showContent}
			{#if !showPage}
				<PageLoader />
			{:else}
				<main in:fade class="pt-16">
					<slot />
				</main>
			{/if}
		{/if}
	</div>
{:else}
	<InitialLoader sendLogo={send} on:transitionsEnded={() => (canStartApp = true)} />
{/if}

<style>
	.logo-wrapper {
		height: 3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	div p {
		font-size: 1rem;
		line-height: normal;
	}
	div.hidden {
		visibility: hidden;
		opacity: 0;
		width: 0;
		height: 0;
	}
</style>
