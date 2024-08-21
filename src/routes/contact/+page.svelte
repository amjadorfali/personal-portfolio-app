<script lang="ts">
	import { links, keyedRoutes } from '$lib/config';
	import { enhance } from '$app/forms';
	import GithubIcon from '$lib/assets/github.svelte';
	import LinkedInIcon from '$lib/assets/linkedin.svelte';
	import InstagramIcon from '$lib/assets/instagram.svelte';
	import Link from '$lib/components/link.svelte';
</script>

<svelte:head>
	<title>{keyedRoutes.contact.label} Amjad Orfali - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Contact Amjad Orfali, a frontend web developer and software engineer, to discuss how he can help you achieve your business goals through efficient and effective web development solutions. Use the contact form or listed platforms to reach out and discuss your project needs."
	/>
</svelte:head>

<article class={`flex items-center justify-center align-middle  wrapper h-full min-h-[90vh]`}>
	<section class=" flex flex-col gap-12">
		<div class="flex self-center">
			<Link href={links.email} className="md:!text-6xl font-bold !text-3xl" text="Email me here" />
		</div>

		<div class="flex gap-12 justify-center">
			<a href={links.github} class="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<GithubIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
			</a>

			<a href={links.linkedIn} class="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<LinkedInIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
			</a>
			<a href={links.instagram} class="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
				<InstagramIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
			</a>
		</div>
	</section>
</article>

<style>
	section {
		width: 100%;
	}
	.wrapper {
		width: 100%;
		max-width: 85vw;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.load-submission::after {
		animation: loader 2s normal ease infinite;
		content: '';
	}

	@keyframes bounce {
		from {
			transform: scaleX(1.25);
		}
		to {
			transform: translateY(-50px) scaleX(1);
		}
	}

	@keyframes loader {
		0% {
			content: '';
		}
		33% {
			content: ' .';
		}

		66% {
			content: ' ..';
		}

		100% {
			content: ' ...';
		}
	}
</style>
