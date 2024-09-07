<script lang="ts">
	// ---- Should be imported first ----
	import './styles.scss';

	// ------------------------------------
	import { scale } from 'svelte/transition';
	import { keyedRoutes, links } from '$lib/config';
	import { Link } from '$lib/components';

	import FavIcon from '$lib/assets/favicon.png?w=48&h=48&format=webp&imagetools';

	import { Avatar } from '@skeletonlabs/skeleton';
	// import BackgroundAnimation from '$lib/components/animations/backgroundAnimation.svelte';
	import GithubIcon from '$lib/assets/github.svelte';
	import LinkedInIcon from '$lib/assets/linkedin.svelte';
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
</script>

<div class="bg-primary z-[0]">
	<header
		class:scrolled={show}
		bind:this={myInput}
		class="flex justify-center w-full px-4 py-2 variant-glass-surface"
	>
		<div class="flex justify-between w-full xl:max-w-[75rem]">
			<a
				href={keyedRoutes.home.url}
				aria-label="Home"
				class=" logo-wrapper gap-5 transition-all duration-150 hover:shadow-lg active:shadow-lg hover:-skew-y-3 active:-skew-y-3 hover:skew-x-3 active:skew-x-3 p-[0.3rem]"
			>
				<Avatar src={FavIcon} alt="" width="w-12" class="prevent-select " />
			</a>

			<Link
				underline={false}
				href={links.email}
				className="font-bold !text-on-primary-token rounded-tr-lg rounded-bl-lg active:scale-95 bg-primary-500 hover:bg-primary-500/50 transition-all duration-200 p-3"
				text="Let's chat"
			/>
		</div>
	</header>

	<main in:scale|global out:scale|global={{ duration: 200 }} class="pt-16">
		<slot />
	</main>

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

<style>
	.logo-wrapper {
		height: 3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
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
</style>
