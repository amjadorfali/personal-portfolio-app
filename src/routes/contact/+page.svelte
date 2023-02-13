<script lang="ts">
	import { links, keyedRoutes } from '$lib/config';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let submittingForm = false;
</script>

<svelte:head>
	<title>Amjad | {keyedRoutes.contact.label}</title>
	<meta name="description" content="Contact Amjad Orfali" />
</svelte:head>

<article class="flex  items-center justify-center align-middle wrapper">
	<section class=" flex flex-col gap-12">
		<h1 class="font-bold ">{keyedRoutes.contact.label}</h1>

		<div class="flex justify-around">
			<div class="flex basis-1/3 justify-evenly gap-4">
				<h4>Work</h4>
				<ul>
					<li>
						<a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Account">Github</a>
					</li>
					<li>
						<a href={links.email} target="_blank" rel="noopener noreferrer" aria-label="Email Account">Email</a>
					</li>
				</ul>
			</div>
			<div class="flex basis-1/3 justify-evenly gap-4 ">
				<h4>Social</h4>

				<ul>
					<li>
						<a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instatgram Account">Instagram</a>
					</li>
					<li>
						<a href={links.linkedIn} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Account">LinkedIn</a>
					</li>
				</ul>
			</div>
		</div>
		{#if form?.success === true}
			<h1>I recieved your email, will get back to you shortly!</h1>
		{:else if form?.success === false}
			<h1>Something went wrong :( <br /> <br /> please refresh page and try again</h1>
		{:else if submittingForm}
			<h1>Loading form submission</h1>
		{:else}
			<form
				name="contact"
				method="post"
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
					<label>Your Name: <input required type="text" name="name" /></label>
				</p>

				<p>
					<label>Your Email: <input required type="email" name="email" /></label>
				</p>
				<p>
					<label>Message: <textarea name="message" required /></label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		{/if}
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
		min-height: 100vh;
	}

	h1 {
		text-align: center;
	}

	h1 {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		.wrapper {
			margin: 2.5rem;
		}
		h1 {
			text-align: start;
		}

		h1 {
			font-size: 1rem;
		}
	}
</style>
