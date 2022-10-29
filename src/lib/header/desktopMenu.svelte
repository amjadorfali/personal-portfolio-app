<script lang="ts">
	import MediaQuery from '$lib/MediaQuery.svelte';
	import { crossfade, fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { cubicInOut } from 'svelte/easing';
	import { routes } from '$lib/config/routes';

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut,
	});
</script>

<div>
	<MediaQuery query="(min-width: 691px)" let:matches>
		{#if matches}
			<nav class="desktop-nav" transition:fade="{{ duration: 200 }}">
				<svg viewBox="0 0 2 3" aria-hidden="true">
					<path class="fill-secondary" d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"></path>
				</svg>
				<ul class="bg-secondary desktop-list">
					{#each routes as route (route.label)}
						<li
							class="{`text-faded-primary ${$page.url.pathname === route.url && 'text-primary'}`}"
							class:active="{$page.url.pathname === route.url}"
						>
							{#if $page.url.pathname === route.url}
								<span class="active" out:send="{{ key: 'active-marker' }}" in:receive="{{ key: 'active-marker' }}"></span>
							{/if}
							<a sveltekit:prefetch href="{route.url}">{route.label}</a>
						</li>
					{/each}
				</ul>
				<svg viewBox="0 0 2 3" aria-hidden="true">
					<path class="fill-secondary" d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"></path>
				</svg>
			</nav>
		{/if}
	</MediaQuery>
</div>

<style>
	nav {
		display: flex;
		justify-content: center;
	}

	ul.desktop-list {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
		padding: 0 1em;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	li a {
		transform: scale(1);
		transition: transform 0.2s linear;
	}

	li.active a {
		transform: scale(1.2);
	}

	span.active {
		--size: 0.375rem;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--primary);
	}
	a:hover {
		color: var(--primary);
	}

	svg {
		height: 3rem;
		min-width: 32px;
		display: block;
	}

	/* Align properly on Mobile */
	@media (max-width: 490px) {
		header {
			justify-content: space-around;
		}
	}

	.mobile-menu {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		flex: auto;
		align-items: center;
		width: 50vw;
		right: 0;
		justify-content: flex-end;
		background-color: var(--secondary);
		height: 40vh;
	}
</style>
