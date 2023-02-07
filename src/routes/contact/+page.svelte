<script lang="ts">
	import { links, keyedRoutes } from '$lib/config';
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
		height: 35vh;
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
