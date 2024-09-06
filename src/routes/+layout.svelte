<script lang="ts">
	// ---- Should be imported first ----
	import './styles.scss';

	// ------------------------------------
	import { crossfade, scale } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { keyedRoutes, links } from '$lib/config';
	import { InitialLoader, CustomDrawer, PageLoader, Link } from '$lib/components';

	import FavIcon from '$lib/assets/favicon.png?w=48&h=48&format=webp&imagetools';
	import { initializeStores } from '@skeletonlabs/skeleton';

	import { Avatar } from '@skeletonlabs/skeleton';
	// import BackgroundAnimation from '$lib/components/animations/backgroundAnimation.svelte';
	import { navigating, page } from '$app/stores';
	import { onDestroy } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';
	import GithubIcon from '$lib/assets/github.svelte';
	import LinkedInIcon from '$lib/assets/linkedin.svelte';
	import InstagramIcon from '$lib/assets/instagram.svelte';
	import { onMount } from 'svelte';
	let myInput: HTMLElement;
	let show = false;

	onMount(() => {
		let lastScroll = window.scrollY;
		window.onscroll = () => {
			let dirDown = window.scrollY > lastScroll;
			lastScroll = window.scrollY;

			if (dirDown) {
				if (window.scrollY > myInput.clientHeight) {
					show = true;
				}
			} else {
				show = false;
			}
		};

		return () => {
			window.onscroll = () => {};
		};
	});

	initializeStores();
	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut,
		delay: 50
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
		<header
			class:scrolled={show}
			bind:this={myInput}
			class="flex justify-center w-full px-4 py-2 variant-glass-surface"
		>
			<div class="flex justify-between w-full xl:max-w-[75rem]">
				<a
					href={keyedRoutes.home.url}
					class=" logo-wrapper gap-5 transition-all duration-150 hover:shadow-lg active:shadow-lg hover:-skew-y-3 active:-skew-y-3 hover:skew-x-3 active:skew-x-3 p-[0.3rem]"
				>
					<div in:receive|global={{ key: 'logo' }} on:introend={() => (showContent = true)}>
						<Avatar src={FavIcon} alt="" width="w-12" class="prevent-select " />
					</div>
				</a>

				<Link
					underline={false}
					href={links.email}
					className="font-bold !text-white rounded-tr-lg rounded-bl-lg active:scale-95 bg-primary-500 hover:bg-primary-500/50 transition-all duration-200 p-3"
					text="Let's chat"
				/>
			</div>
		</header>

		{#if showContent}
			{#if showRoute}
				<main
					in:scale|global
					out:scale|global={{ duration: 200 }}
					on:outroend={() => (routeOutroDone = true)}
					class="pt-16"
				>
					<slot />
				</main>
			{:else if routeOutroDone}
				{#key currentKey}
					<PageLoader loadingDone={!routeLoading} on:tweenDone={() => (showRoute = true)} />
				{/key}
			{/if}
		{/if}
		<footer class=" bg-surface-600 justify-center flex mt-4 py-4 px-4 variant-glass-surface">
			<div class="flex w-full justify-between xl:max-w-[75rem]">
				<div class="flex gap-12 justify-center">
					<a
						href={links.github}
						class=""
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<GithubIcon
							className="size-6 over:scale-125 hover:fill-[black] active:scale-125  transition-all"
						/>
					</a>

					<a
						href={links.linkedIn}
						class=""
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Linkedin"
					>
						<LinkedInIcon
							className="size-6 hover:scale-125 hover:fill-[black] active:scale-125  transition-all"
						/>
					</a>
				</div>
				<div>
					<Link
						href={`https://github.com/amjadorfali/personal-portfolio-app`}
						target="_blank"
						rel="noopener noreferrer"
						className="block "
						text="Github source"
					/>
				</div>
			</div>
		</footer>
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

	header {
		position: fixed;
		z-index: 1;
		/* grid-template-columns: 0.5fr 1fr 0.2fr 0.1fr; */
		top: 0;
		/* position: fixed; */
		transition: 0.5s ease;
	}
	.scrolled {
		transform: translate(0, calc(-100% - 1rem));
	}

	@media (min-width: 1000px) {
		header {
			/* grid-template-columns: 0.5fr 1fr 0.5fr; */
		}
	}
</style>
