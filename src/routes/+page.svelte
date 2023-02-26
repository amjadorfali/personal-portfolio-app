<script lang="ts">
	import { keyedRoutes } from '$lib/config';
</script>

<svelte:head>
	<title>Amjad</title>
	<meta name="description" content="Amjad Orfali's Portfolio" />
</svelte:head>

<article class="items-center justify-center align-middle h-full min-h-[70vh] lg:min-h-[81.3vh] gap-8 ">
	<p class="unstyled capitalize">Hey, I'm Amjad <br /> but you can call me the Front-End Wizard!</p>
	<div class="flex justify-center gap-8">
		<a class="!text-primary-500 unstyled projects-link overflow-hidden" data-sveltekit-preload-data href={keyedRoutes.projects.url}>
			See my projects

			<div class="link-underline" />
		</a>
		<a class="!text-primary-500 unstyled about-link overflow-hidden" data-sveltekit-preload-data href={keyedRoutes.about.url}
			>More about me

			<div class="link-underline" />
		</a>
	</div>
</article>

<style>
	p {
		max-width: 40ch;
		font-size: 2.5rem;
	}

	article {
		gap: 1rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.link-underline {
		position: relative;
		width: 100%;
		bottom: 0;
		left: 0;
		transform-origin: bottom right;
		transition: all 0.25s ease-in-out;
		transform: translateX(-101%) translateZ(0px);
		height: 0.2rem;
		background-color: rgb(var(--color-primary-500));
	}

	.projects-link:hover > .link-underline,
	.about-link:hover > .link-underline {
		transform: translateX(0%) translateZ(0px);
	}
</style>
