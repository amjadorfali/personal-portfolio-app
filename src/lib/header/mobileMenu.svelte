<script lang="ts">
	import MediaQuery from '$lib/MediaQuery.svelte';
	import { fade } from 'svelte/transition';
	import { routes } from '$lib/config/routes';
	import { page } from '$app/stores';

	import type SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer';

	import { onMount, tick } from 'svelte';
	import { debug } from 'svelte/internal';

	let drawer: SlDrawer;
	let modalOpen = false;

	$: modalOpen ? drawer?.show() : drawer?.hide();

	const onHideDrawer = () => {
		modalOpen = false;
	};

	onMount(async () => {
		await tick();
		drawer?.addEventListener('sl-hide', onHideDrawer);
		return () => drawer?.removeEventListener('sl-hide', onHideDrawer);
	});

	//Make sure the event listener is added
	$: {
		//Rerender whenever modalOpen changes
		modalOpen;
		tick().then(() => !drawer?.hasAttribute('sl-hide') && drawer?.addEventListener('sl-hide', onHideDrawer));
	}
</script>

<!-- TODO put something else here? github link? -->
<div class="corner">
	<MediaQuery query="(max-width: 768px)" let:matches on:out={() => (modalOpen = false)}>
		{#if matches}
			<!-- Hamburger Menu -->
			<div class="menuToggle" transition:fade={{ duration: 200 }}>
				<input type="checkbox" bind:checked={modalOpen} />
				<span />
				<span />
				<span />
			</div>

			<sl-drawer bind:this={drawer} label="Web & Software Eng." placement="bottom" class="drawer-placement-bottom">
				<nav>
					<ul class="">
						{#each routes as route (route.label)}
							<li
								class={`text-faded-primary ${$page.url.pathname === route.url ? 'text-primary' : 'hover:text-primary hover:underline '}`}
								class:active={$page.url.pathname === route.url}
							>
								<a on:click={() => (modalOpen = false)} data-sveltekit-preload-data href={route.url}>{route.label}</a>
							</li>
						{/each}
					</ul>
				</nav>
			</sl-drawer>
		{/if}
	</MediaQuery>
</div>

<style>
	div.menuToggle {
		position: relative;
		height: 1rem;
	}

	div.menuToggle input {
		display: block;
		width: 40px;
		height: 32px;
		position: absolute;
		top: -7px;
		left: -5px;

		cursor: pointer;

		opacity: 0; /* hide this */
		z-index: 2; /* and place it over the hamburger */

		-webkit-touch-callout: none;
	}

	/*
	* Just a quick hamburger
	*/
	div.menuToggle span {
		display: block;
		width: 33px;
		height: 4px;
		margin-bottom: 5px;
		position: relative;

		background: var(--secondary);
		border-radius: 3px;

		z-index: 1;

		transform-origin: 4px 0px;

		transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
	}

	div.menuToggle span:first-child {
		transform-origin: 0% 0%;
	}

	div.menuToggle span:nth-of-type(3) {
		transform-origin: 0% 100%;
	}

	/* 
	* Transform all the slices of hamburger
	* into a crossmark.
	*/
	div.menuToggle input:checked ~ span {
		opacity: 1;
		transform: rotate(45deg) translate(-2px, -1px);
		background: var(--secondary);
	}

	/*
 	* But let's hide the middle one.
 	*/
	div.menuToggle input:checked ~ span:nth-of-type(2) {
		opacity: 0;
		transform: rotate(0deg) scale(0.2, 0.2);
	}

	/*
 	* Oh yeah and the last one should go the other direction
 	*/
	div.menuToggle input:checked ~ span:nth-of-type(3) {
		transform: rotate(-45deg) translate(0, -1px);
	}

	/* Corner Right - Hamburger Menu */
	div.corner {
		display: flex;
		align-items: center;
	}

	.drawer-placement-bottom {
		--size: 100vh;
	}
	.drawer-placement-bottom::part(panel) {
		background-color: black;
		height: 100%;
		color: white;
	}

	.drawer-placement-bottom::part(close-button) {
		font-size: 3rem;
	}

	.drawer-placement-bottom::part(close-button__base) {
		color: white;
	}

	li a {
		transform: scale(1);
		transition: transform 0.2s linear;
	}

	li.active a {
		transform: scale(1.2);
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
		transition: color 0.2s linear;
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
