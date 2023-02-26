<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import GithubIcon from '$lib/assets/github.svelte';

	export let data: PageData;
</script>

<article class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 h-full min-h-[90vh]">
	<section>
		<caption class="opacity-50 uppercase text-tertiary-700-200-token">Project</caption>
		<br />
		<h1 class="flex items-center gap-1"><Avatar src={data.config.logo} background="bg-surface-900-50-token p-[0.35rem]" /> {data.literals.name}</h1>
		<br />
		<h3>{data.literals.summary}</h3>
		<br />
		<footer class="card-footer flex items-center gap-7">
			{#if data.urls?.site}
				<a href={data.urls?.site} target="_blank" rel="noopener noreferrer" aria-label="Project Link"> Visit Website </a>
			{/if}
			{#if data.urls?.github?.api}
				<a href={data.urls?.github.api} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<GithubIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
				</a>
			{/if}

			{#if data.urls?.github?.client}
				<a href={data.urls?.github.client} class="" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<GithubIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
				</a>
			{/if}
		</footer>
	</section>
	<section class="gap-4 flex flex-col">
		<h3>Description</h3>
		<p class="overflow-y-scroll max-h-[40vh]">{@html data.literals.description}</p>
	</section>
</article>

<style>
	article {
		padding: 0 1rem 1rem 1rem;
		width: 100%;
		max-width: 100vw;
		box-sizing: border-box;
		justify-content: center;
		align-content: center;
	}
</style>
