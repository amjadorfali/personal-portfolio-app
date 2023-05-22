<script lang="ts">
	import { Link } from '$lib/components';
	import { keyedRoutes } from '$lib/config';
</script>

<svelte:head>
	<title>Amjad Orfali - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Welcome to Amjad Orfali's portfolio website! Amjad is a skilled frontend web developer and software engineer with years of experience in the field. Discover his technical expertise and commitment to quality in creating responsive and visually appealing websites and user-friendly interfaces for web applications. Explore his past projects and let's discuss how he can help you achieve your business goals through efficient and effective web development solutions."
	/>
</svelte:head>
<article class="items-center justify-center align-middle h-full min-h-[70vh] lg:min-h-[81.3vh] gap-8">
	<h1 class="unstyled capitalize">Hey, I'm Amjad <br /> but you can call me the Front-End Wizard!</h1>
	<div class="flex justify-center gap-8">
		<Link text="See my projects" href={keyedRoutes.projects.url} />
		<Link text="More about me" href={keyedRoutes.about.url} />
	</div>
</article>

<style>
	h1 {
		max-width: 40ch;
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
</style>
