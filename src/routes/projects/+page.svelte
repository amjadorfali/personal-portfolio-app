<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { normalizedProjects, projects } from '$lib/config/projects';
	import { fly } from 'svelte/transition';
	import GithubIcon from '$lib/assets/github.svelte';

	const storeSingle: Writable<string> = writable(projects[0].name);
</script>

<svelte:head>
	<title>Amjad | Projects</title>
	<meta name="description" content="Projects from Amjad Orfali" />
</svelte:head>

<div class="h-[95vh] overflow-y-auto">
	<article class="flex items-center justify-around align-middle flex-col md:flex-row md:h-[-webkit-fill-available] ">
		{#key $storeSingle}
			<div
				in:fly={{ duration: 500, x: -200 }}
				class="order-2 card w-full md:basis-2/4 md:order-1  shadow-sm shadow-tertiary-500 dark:shadow-tertiary-900 card-hover"
			>
				{#if normalizedProjects[$storeSingle].images.length}
					<header>
						<img src={normalizedProjects[$storeSingle].images[0]} alt="Todo app" />
					</header>
				{/if}

				<div class="p-4">{normalizedProjects[$storeSingle].description}</div>
				<footer class="card-footer flex items-center gap-7">
					{#if normalizedProjects[$storeSingle].url}
						<a href={normalizedProjects[$storeSingle].url} target="_blank" rel="noreferrer" aria-label="Project Link"> Visit Website </a>
					{/if}
					{#if normalizedProjects[$storeSingle].github}
						<a href={normalizedProjects[$storeSingle].github} target="_blank" rel="noreferrer" aria-label="GitHub">
							<GithubIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
						</a>
					{/if}
				</footer>
			</div>
		{/key}

		<div class="order-1 md:basis-1/5 md:order-2">
			<ListBox selected={storeSingle} label="Projects">
				{#each projects as project (project.name)}
					<ListBoxItem value={project.name}>{project.name}</ListBoxItem>
				{/each}
			</ListBox>
		</div>
	</article>
</div>

<style>
	article div header {
		padding: 1rem 1rem 0 1rem;
		max-width: 100%;
	}

	article {
		gap: 1rem;
		flex: 1;
		padding: 1rem;
		margin-top: 3rem;
		width: 100%;
		max-width: 100vw;
		box-sizing: border-box;
	}
</style>
