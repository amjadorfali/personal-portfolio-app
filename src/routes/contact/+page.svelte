<script lang="ts">
	import { links, keyedRoutes } from '$lib/config';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import GithubIcon from '$lib/assets/github.svelte';
	import LinkedInIcon from '$lib/assets/linkedin.svelte';
	import InstagramIcon from '$lib/assets/instagram.svelte';

	export let form: ActionData;

	let submittingForm = false;
</script>

<svelte:head>
	<title>{keyedRoutes.contact.label} Amjad Orfali - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Contact Amjad Orfali, a frontend web developer and software engineer, to discuss how he can help you achieve your business goals through efficient and effective web development solutions. Use the contact form or listed platforms to reach out and discuss your project needs."
	/>
</svelte:head>

<article class={`flex  items-center justify-center align-middle wrapper h-full min-h-[90vh]`}>
	<section class=" flex flex-col gap-12">
		<h1 class="font-bold ">{keyedRoutes.contact.label}</h1>

		{#if form?.success === true}
			<h1>I recieved your email, will get back to you shortly!</h1>
		{:else if form?.success === false}
			<h1>Something went wrong :( <br /> <br /> please refresh page and try again</h1>
		{:else if submittingForm}
			<h1 class="load-submission">Loading form submission</h1>
		{:else}
			<form
				name="contact"
				method="post"
				class="gap-8 self-start flex flex-col w-3/4 md:w-1/3 md:self-center"
				use:enhance={() => {
					//Before form is submitted
					submittingForm = true;
					return async ({ update }) => {
						//After form is submitted
						await update();
						submittingForm = false;
					};
				}}
			>
				<p>
					<label class="label"
						>Name: <input required type="text" class="input variant-form-material" name="name" placeholder="Enter your Name ..." /></label
					>
				</p>

				<p>
					<label>Email: <input required type="email" name="email" class="input variant-form-material" placeholder="Enter your Email ..." /></label>
				</p>
				<p>
					<label>Message: <textarea name="message" required class="textarea variant-form-material" placeholder="Enter your Message ..." /></label>
				</p>
				<p>
					<button class="btn variant-filled-primary" type="submit">Send</button>
				</p>
			</form>
		{/if}

		<div class="flex gap-12 md:justify-center">
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

	h1 {
		text-align: center;
	}

	h1 {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		h1 {
			text-align: start;
		}

		h1 {
			font-size: 1rem;
		}
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
