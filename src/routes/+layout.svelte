<script lang="ts">
	// ---- Should be imported first ----
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import './styles.scss';
	import './styles.css';

	// ------------------------------------
	import { crossfade, scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	// eslint-disable-next-line  @typescript-eslint/no-unused-vars
	import { setInitialClassState } from '@skeletonlabs/skeleton';

	import { keyedRoutes } from '$lib/config';
	import { Header, InitialLoader, CustomDrawer, PageLoader } from '$lib/components';

	import FavIcon from '$lib/assets/favicon.png?w=48&h=48&format=webp&imagetools';

	import { Avatar } from '@skeletonlabs/skeleton';
	// import BackgroundAnimation from '$lib/components/animations/backgroundAnimation.svelte';
	import { navigating, page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut,
		delay: 200
	});
	let routeOutroDone = true,
		routeLoading = false,
		showRoute = true,
		currentKey: string = uuidv4(),
		siteIntroDone = $page.url.pathname !== keyedRoutes.home.url,
		showContent = siteIntroDone;

	const unsub = navigating.subscribe((nav) => {
		if (!nav) return (routeLoading = false);

		if (nav?.type === 'link' && nav.from?.url.pathname !== nav.to?.url.pathname) {
			if (showRoute) routeOutroDone = false;
			currentKey = uuidv4();
			routeLoading = true;
			showRoute = false;
		}
	});

	onDestroy(unsub);
</script>

<CustomDrawer />

{#if siteIntroDone}
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
					<p class="unstyled text-primary-300 w-max font-bold">Amjad Orfali <br />Software Engineer</p>
				</div>
			</a>
		</Header>

		{#if showContent}
			{#if showRoute}
				<main in:scale out:scale={{ duration: 200 }} on:outroend={() => (routeOutroDone = true)} class="pt-16">
					<slot />
				</main>
			{:else if routeOutroDone}
				{#key currentKey}
					<PageLoader loadingDone={!routeLoading} on:tweenDone={() => (showRoute = true)} />
				{/key}
			{/if}
		{/if}
	</div>
{:else}
	<InitialLoader sendLogo={send} on:transitionsEnded={() => (siteIntroDone = true)} />
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
</style>
