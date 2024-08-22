<script lang="ts">
	import { MediaQuery } from '$lib/components';
	import { crossfade, fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { cubicInOut } from 'svelte/easing';

	import { supportedBreakPoint, routes } from '$lib/config';
	import { matchRoute } from '$lib/utils';

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut
	});
</script>

<MediaQuery query={`(min-width: ${supportedBreakPoint}px)`} let:matches>
	{#if matches}
		<nav transition:fade|global={{ duration: 200 }}>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path class="fill-primary-500" d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
			</svg>
			<ul class="desktop-list bg-primary-500">
				{#each routes as route (route.label)}
					<li
						class={`  ${matchRoute(route.url, $page.url.pathname) && '!text-secondary-800 active'} `}
					>
						{#if matchRoute(route.url, $page.url.pathname)}
							<span
								class={'active !border-t-secondary-800'}
								out:send|global={{ key: 'active-marker' }}
								in:receive|global={{ key: 'active-marker' }}
							/>
						{/if}
						<a href={route.url} class="  hover:!text-secondary-800">{route.label}</a>
					</li>
				{/each}
			</ul>
			<svg viewBox="0 0 2 3" aria-hidden="true">
				<path class="fill-primary-500" d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
			</svg>
		</nav>
		<div class="self-center px-8 text-secondary-50 justify-self-end">
			<!-- <LightSwitch width="w-12" height="h-6" /> -->
		</div>
	{/if}
</MediaQuery>

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
		padding: 0 2em;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		font-weight: 700;
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
		border-top-width: var(--size);
		border-top-style: solid;
	}

	svg {
		height: 3rem;
		min-width: 32px;
		display: block;
	}
</style>
