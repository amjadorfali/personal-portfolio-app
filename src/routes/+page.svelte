<script lang="ts">
	import { routes } from '$lib/config/routes';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<article class="items-center justify-center align-middle">
	<section>
		<h1>
			<a class="text-secondary border-b-2" data-sveltekit-preload-data href={routes[1].url}>Software Engineer</a>
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
