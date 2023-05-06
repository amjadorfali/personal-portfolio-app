<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	import { projectTuples, keyedRoutes } from '$lib/config';
</script>

<svelte:head>
	<title>Amjad Orfali's Portfolio - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Discover Amjad Orfali's portfolio of past projects that showcase his skills and expertise as a frontend web developer and software engineer. From developing responsive websites to creating user-friendly interfaces, Amjad has a solid understanding of the latest technologies such as HTML5, CSS3, and JavaScript frameworks like React and Svelte."
	/>
</svelte:head>

<!-- //FIXME: Apply `Prefer reduced motion` accessibility fixes for all needed transitions -->

<div class="wrapper flex flex-col h-full min-h-[90vh]">
	<h1 class="font-bold">{keyedRoutes.projects.label}</h1>

	<article class="flex flex-col items-center gap-12">
		{#each projectTuples as projectTuple}
			<section class="flex flex-row flex-wrap self-stretch justify-center gap-12 sm:gap-32 sm:flex-nowrap">
				{#each projectTuple as project (project?.config.path)}
					<a
						class="card variant-glass-secondary max-w-md card-hover basis-full sm:basis-[30%] shadow-sm shadow-tertiary-500 dark:shadow-tertiary-900 self-stretch"
						href={`${keyedRoutes.projects.url}/${project?.config.path}`}
						in:fly={{ duration: 500, x: -200 }}
					>
						<div class="card-header">
							<Avatar src={project?.config.logo} background="bg-surface-900-50-token p-[0.35rem]" />
						</div>
						<div class="p-4">
							<h3>
								{project?.literals.name}
							</h3>
						</div>

						<div class="p-4">
							<p class="unstyled">
								{project?.literals.summary}
							</p>
						</div>
					</a>
				{/each}
			</section>
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
