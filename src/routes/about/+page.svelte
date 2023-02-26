<script lang="ts">
	import { keyedRoutes } from '$lib/config';
	import MyImage from '$lib/assets/myself.jpg';
</script>

<svelte:head>
	<title>Amjad | {keyedRoutes.about.label}</title>
	<meta name="description" content="About Amjad Orfali" />
</svelte:head>

<article class="items-center align-middle wrapper  flex flex-col  gap-4 justify-between lg:flex-row h-full min-h-[90vh] ">
	<section class="basis-1/2 flex flex-col gap-4 order-2  lg:order-1">
		<caption class="opacity-50 uppercase text-tertiary-700-200-token">a few words about me</caption>

		<h1 class="font-bold unstyled">
			I'm Amjad Orfali, a web developer and software engineer with a focus on Front-End development. I spend my days bringing designs to life and
			crafting pixel-perfect experiences. When I'm not smashing away at my keyboard, you can find me gaming on Steam or sipping on a cup of coffee.
			I'm also a music enthusiast, and singer as well!
			<br />
			<br />
			Whether you need a stunning website, a jaw-dropping UI, or just someone to geek out about CSS with, I'm your guy.
		</h1>

		<a
			target="_blank"
			href="AmjadOrfaliResume.pdf"
			class=" self-start hover:underline-offset-8 hover:underline hover:animate-bounce !text-primary-500 !underline-offset-8">↓ Resume</a
		>
	</section>
	<section class="basis-1/3  order-1"><img src={MyImage} alt="Me" /></section>
</article>

<style>
	.wrapper {
		width: 100%;
		max-width: 85vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1,
	caption {
		text-align: center;
	}

	h1 {
		font-size: 1rem;
	}
	img {
		max-height: 25rem;
		height: 100%;
		width: 100%;
		color: transparent;
		mix-blend-mode: lighten;
		border-radius: 3rem;
		-o-object-position: 50% 100%;
		object-position: 50% 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}
	@media (max-width: 768px) {
		.wrapper {
			margin: 1.5rem;
		}
		h1,
		caption {
			text-align: start;
		}

		h1 {
			font-size: 1rem;
		}
	}
</style>
