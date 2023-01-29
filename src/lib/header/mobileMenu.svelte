<script lang="ts">
	import MediaQuery from '$lib/MediaQuery.svelte';
	import { fade } from 'svelte/transition';
	import { drawerStore, LightSwitch } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { supportedBreakPoint } from '$lib/config/breakpoints';

	const settings: DrawerSettings = {
		id: 'demo',
		position: 'bottom',
		width: 'w-screen',
		height: 'h-screen',
		bgBackdrop: 'fixed',
		bgDrawer: 'overflow-y-hidden shadow-xl bg-surface-100-800-token   '
	};

	const drawerOpenStyled = () => {
		drawerStore.open(settings);
	};

	const toggleStore = () => {
		if ($drawerStore.open) {
			drawerStore.close();
		} else {
			drawerOpenStyled();
		}
	};
</script>

<MediaQuery query={`(max-width: ${supportedBreakPoint - 1}px)`} let:matches on:out={() => drawerStore.close()}>
	{#if matches}
		<div />
		<div class="corner">
			<!-- Hamburger Menu -->
			<div class="menuToggle  " transition:fade={{ duration: 200 }}>
				<input type="checkbox" checked={$drawerStore.open} on:click={toggleStore} class="peer" />
				<span class="bg-surface-800 dark:bg-primary-300 dark:peer-checked:bg-primary-400 " />
				<span class="bg-surface-800 dark:bg-primary-300 dark:peer-checked:bg-primary-400" />
				<span class="bg-surface-800 dark:bg-primary-300 dark:peer-checked:bg-primary-400" />
			</div>
		</div>
		<div class="self-center  dark:text-secondary-50">
			<LightSwitch />
		</div>
	{/if}
</MediaQuery>

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
		margin-right: 0.5rem;
	}
</style>
