<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	import { projects, keyedRoutes } from '$lib/config';
</script>

<svelte:head>
	<title>Amjad Orfali's Portfolio - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Discover Amjad Orfali's portfolio of past projects that showcase his skills and expertise as a frontend web developer and software engineer. From developing responsive websites to creating user-friendly interfaces, Amjad has a solid understanding of the latest technologies such as HTML5, CSS3, and JavaScript frameworks like React and Svelte."
	/>
</svelte:head>

<div class="wrapper flex flex-col h-full min-h-[90vh]">
	<h1 class="font-bold ">{keyedRoutes.projects.label}</h1>

	<article class="flex flex-row justify-between flex-wrap gap-4">
		{#each projects as project (project.config.path)}
			<a
				class=" card card-hover basis-full sm:basis-2/5 lg:basis-[30%] shadow-sm shadow-tertiary-500 dark:shadow-tertiary-900 self-stretch"
				href={`${keyedRoutes.projects.url}/${project.config.path}`}
				in:fly={{ duration: 500, x: -200 }}
			>
				<div class="card-header">
					<Avatar src={project.config.logo} background="bg-surface-900-50-token p-[0.35rem]" />
				</div>
				<div class="p-4">
					<p>
						{project.literals.name}
					</p>
				</div>

				<div class="p-4 ">
					<p>
						{project.literals.summary}
					</p>
				</div>
			</a>
		{/each}
	</article>
</div>

<style>
	article {
		width: 100%;
		max-width: 100vw;
		box-sizing: border-box;
	}
	div.wrapper {
		padding: 0 1rem 4rem 1rem;
		gap: 2rem;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
