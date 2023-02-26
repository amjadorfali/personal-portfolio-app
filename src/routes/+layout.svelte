<script lang="ts">
	// ---- Should be imported first ----
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import './styles.css';
	// ----                          ----

	import { onDestroy } from 'svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { crossfade, fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { keyedRoutes } from '$lib/config';
	import { Header, InitialLoader, PageLoader, CustomDrawer } from '$lib/components';

	import FavIcon from '$lib/assets/favicon.png';
	import { Avatar } from '@skeletonlabs/skeleton';

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
		if (nav?.to?.url.hostname === nav.from?.url.hostname) {
			showPage = false;
			clearTimeout(timeout);
			timeStarted = new Date().getTime();
		}
	});
	afterNavigate((nav) => {
		if (!nav.from || nav?.to?.url.hostname === nav.from?.url.hostname) {
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

<CustomDrawer />

{#if canStartApp}
	<div class="bg-primary">
		<Header>
			<a
				href={keyedRoutes.home.url}
				class="unstyled logo-wrapper grid-cols-2 gap-5 transition-all duration-150 hover:shadow-lg active:shadow-lg hover:-skew-y-3 active:-skew-y-3 hover:skew-x-3 active:skew-x-3 p-[0.3rem] "
			>
				<div in:receive={{ key: 'logo' }} on:introend={() => (showContent = true)}>
					<Avatar src={FavIcon} alt="" class="w-12 h-w-12 prevent-select " />
				</div>
				<div>
					<h4 class="dark:text-primary-300 text-surface-900 w-max ">Amjad Orfali <br />Software Engineer</h4>
				</div>
			</a>
		</Header>

		{#if showContent}
			{#if !showPage}
				<PageLoader />
			{:else}
				<main in:fade class="pt-16 ">
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

	div h4 {
		font-size: 1rem;
		line-height: normal;
	}
</style>
