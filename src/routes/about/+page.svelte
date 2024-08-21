<script lang="ts">
	import { keyedRoutes } from '$lib/config';
	import MyImage from '$lib/assets/myself.png?w=1024&h=1024&format=webp&imagetools';
	import { Link } from '$lib/components';
</script>

<svelte:head>
	<title>{keyedRoutes.about.label} Amjad Orfali - Frontend Web Developer and Software Engineer</title>

	<meta
		name="description"
		content="Get to know Amjad Orfali, a frontend web developer and software engineer with years of experience in the field. Discover his technical skills, collaboration approach, and commitment to quality. Let's work together to achieve your business goals through efficient and effective web development solutions."
	/>
</svelte:head>
<article class="items-center align-middle wrapper flex flex-col gap-4 justify-between lg:flex-row h-full min-h-[90vh]">
	<section class="basis-1/3 lg:order-2">
		<img src={MyImage} alt="Me" class="w-[20rem] h-[20rem] mix-blend-lighten lg:h-full lg:w-full lg:min-h-[9rem] lg:max-h-[25rem]" />
	</section>
	<section class="basis-1/2 flex flex-col gap-4 card p-4 custom-variant-glass-secondary">
		<h3 class="unstyled uppercase text-tertiary-300-600-token card-header">a few words about me</h3>

		<p class="font-bold unstyled">
			I'm Amjad Orfali, a web developer and software engineer with a focus on Front-End development. I spend my days bringing designs to life and
			crafting pixel-perfect experiences. When I'm not smashing away at my keyboard, you can find me gaming on Steam or sipping on a cup of coffee.
			I'm also a music enthusiast, and singer as well!
			<br />
			<br />
			Whether you need a stunning website, a jaw-dropping UI, or just someone to geek out about CSS with, I'm your guy.
		</p>

		<Link
			target="_blank"
			text="↓ Resume"
			href="https://drive.google.com/file/d/19ukhdVYAM6QU9F-eJf5qz0K_qCfjYBBm/view?usp=share_link"
			className="w-fit"
		/>
	</section>
</article>

<style>
	.wrapper {
		width: 100%;
		max-width: 85vw;
		margin: 1.5rem;
		box-sizing: border-box;
	}

	h3,
	p {
		text-align: start;
	}

	img {
		color: transparent;
		border-radius: 3rem;
		-o-object-position: 50% 100%;
		object-position: 50% 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}
	@media (min-width: 767px) {
		.wrapper {
			margin: 0 auto;
		}
		p,
		h3 {
			text-align: center;
		}
	}

	.custom-variant-glass-secondary {
		background-color: rgb(var(--color-secondary-500) / 0.7) !important;
		--tw-backdrop-blur: blur(16px);
		backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale)
			var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;
	}
</style>
