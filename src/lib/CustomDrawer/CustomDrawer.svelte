<script lang="ts">
	import { page } from '$app/stores';
	import { routes } from '$lib/config/routes';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';

	const onHideDrawer = () => drawerStore.close();
</script>

<Drawer>
	<div class="flex flex-1 justify-end relative">
		<button class="btn-icon w-24 absolute" on:click={onHideDrawer}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
				<path
					d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
				/>
			</svg>
		</button>
	</div>
	<nav>
		<ul>
			{#each routes as route (route.label)}
				<li class={`${$page.url.pathname === route.url ? '' : 'opacity-40 hover:opacity-100 '}`} class:active={$page.url.pathname === route.url}>
					<a data-sveltekit-preload-data href={route.url} on:click={onHideDrawer}>{route.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</Drawer>

<style>
	li {
		transition: opacity 0.3s linear;
	}

	li a {
		transform: scale(0.75);
		transition: scale 0.2s linear;
	}

	li.active a {
		transform: scale(1);
	}

	nav {
		height: 100%;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		font-weight: 700;
		font-size: 3rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
	}

	ul {
		display: flex;
		height: 100%;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex-direction: column;
	}
</style>
