<script lang="ts">
	//Should be imported first
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import './styles.css';

	import Header from '$lib/header/Header.svelte';
	import { page } from '$app/stores';
	import { crossfade, fade } from 'svelte/transition';
	import InitialLoader from '$lib/initialLoader.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { routes } from '$lib/config/routes';
	import CustomDrawer from '$lib/CustomDrawer/CustomDrawer.svelte';
	import { PageLoader } from '$lib';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { onDestroy } from 'svelte';

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut,
		delay: 200
	});

	let canStartApp = $page.url.pathname !== '/',
		showContent = canStartApp;

	// ----- Navigation logic starts -----
	const navigationLimit = 1000;
	let showPage = canStartApp;
	let timeout: NodeJS.Timeout;
	let timeStarted: number | undefined;

	beforeNavigate(() => {
		showPage = false;
		clearTimeout(timeout);
		timeStarted = new Date().getTime();
	});
	afterNavigate(() => {
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
				href={routes[0].url}
				class="unstyled  logo-wrapper grid-cols-2 gap-5 p-7 transition-all duration-150 hover:shadow-lg active:shadow-lg hover:-skew-y-3 active:-skew-y-3 hover:skew-x-3 active:skew-x-3 "
			>
				<img src={'favicon.png'} in:receive={{ key: 'logo' }} on:introend={() => (showContent = true)} alt="" class="w-12 h-w-12 prevent-select " />
				<div>
					<h4 class="dark:text-primary-300 text-surface-900 w-max ">Amjad Orfali <br />Software Engineer</h4>
				</div>
			</a>
		</Header>

		{#if showContent}
			{#if !showPage}
				<PageLoader />
			{:else}
				<main in:fade>
					<slot />
				</main>
			{/if}
		{/if}
	</div>
{:else}
	<InitialLoader sendLogo={send} on:transitionsEnded={() => (canStartApp = true)} />
{/if}

<style>
	a img.prevent-select {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}
	.logo-wrapper {
		margin-left: 8px;
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
