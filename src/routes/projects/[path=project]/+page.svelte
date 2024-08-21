<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import GithubIcon from '$lib/assets/github.svelte';
	import { Link } from '$lib/components';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.config.title}</title>
	<meta name="description" content={data.config.metaDescription} />
</svelte:head>

<article class="grid gap-y-16 h-full min-h-[90vh] justify-items-center">
	<section>
		<br />
		<h1 class="h1 flex items-center gap-4">
			<Avatar src={data.config.logo} background="bg-surface-900-50-token p-[0.35rem]" />
			<span>{data.literals.name}</span>
		</h1>
		<br />
		<h3 class="h3">{data.literals.summary}</h3>
		<br />
		<h4 class="h4">{data.literals?.subSummary || ''}</h4>
		<br />
		<footer class="card-footer flex items-end gap-7">
			{#if data.urls?.site}
				<Link text="Visit Website" href={data.urls?.site} target="_blank" rel="noopener noreferrer" ariaLabel="Project Link" />
			{/if}
			{#if data.urls?.github?.api}
				<a
					href={data.urls?.github.api}
					class="flex flex-col items-center !no-underline gap-1 text-center"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<GithubIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
					<span>Api Code</span>
				</a>
			{/if}

			{#if data.urls?.github?.client}
				<a
					href={data.urls?.github.client}
					class="flex flex-col items-center !no-underline gap-1 text-center"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
				>
					<GithubIcon className="w-12 h-12 hover:scale-125 hover:fill-[black] active:scale-125  transition-all" />
					<span>Client Code</span>
				</a>
			{/if}
		</footer>
	</section>
	<section class="card variant-glass-secondary p-4 md:w-[70%] lg:w-[50%]">
		<h3 class="h3 card-header">Description</h3>
		<br />
		<p class=" description pr-4">{@html data.literals.description}</p>
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

	p.description::-webkit-scrollbar {
		width: 1rem;
	}

	p.description::-webkit-scrollbar-track {
		border-radius: 10px;
	}
</style>
