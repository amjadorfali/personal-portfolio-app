<script lang="ts">
	import { keyedRoutes } from '$lib/config';
</script>

<svelte:head>
	<title>Amjad</title>
	<meta name="description" content="Amjad Orfali's Portfolio" />
</svelte:head>

<article class="items-center justify-center align-middle">
	<section>
		<h1>
			<a class="!text-primary-500 !underline-offset-8" data-sveltekit-preload-data href={keyedRoutes.about.url}>Software Engineer</a>
		</h1>
	</section>

	<section>
		<p>
			I have a strong foundation in computer science principles and a passion for staying up-to-date with the latest web development technologies and
			trends. I am able to work effectively as part of a team or individually, and pride myself on my ability to take on complex problems and deliver
			high-quality solutions in a timely manner.
		</p>
	</section>
</article>

<style>
	h1 a {
		text-decoration: none;
	}
	p {
		max-width: 60ch;
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
		height: 81.3vh;
	}
</style>
