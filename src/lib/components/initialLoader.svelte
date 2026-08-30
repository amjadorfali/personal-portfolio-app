<script lang="ts">
	import { draw, type CrossfadeParams, type TransitionConfig } from 'svelte/transition';
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let start = false;

	onMount(() => {
		start = true;
	});

	export let sendLogo: (
		node: Element,
		params: CrossfadeParams & {
			key: string;
		}
	) => () => TransitionConfig;
</script>

<svelte:head>
	<title>Amjad Orfali - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Welcome to Amjad Orfali's portfolio website! Amjad is a skilled frontend web developer and software engineer with years of experience in the field. Discover his technical expertise and commitment to quality in creating responsive and visually appealing websites and user-friendly interfaces for web applications. Explore his past projects and let's discuss how he can help you achieve your business goals through efficient and effective web development solutions."
	/>
</svelte:head>
{#if start}
	<div class="box flex">
		<div class="slide slide-1 bg-secondary" />
		<svg viewBox="0 0 500 700" class="circle" out:sendLogo|global={{ key: 'logo' }}>
			<g fill="none" fill-rule="evenodd" stroke="black">
				<g stroke-width="7.5" stroke="white">
					<circle
						in:draw|global={{ duration: 500 }}
						on:introend={() => dispatch('transitionsEnded')}
						cx="250"
						cy="350"
						r="250"
					/>
				</g>

				<g transform="translate(250, 350) scale(2.2)">
					<rect x="-42" y="-42" width="84" height="84" rx="22" fill="white" />
					<circle cx="0" cy="0" r="28" fill="none" stroke="black" stroke-width="8" />
				</g>
			</g>
		</svg>
		<div class="slide slide-2 bg-secondary" />
	</div>
{/if}

<style>
	svg {
		z-index: 1;
	}
	svg.circle {
		width: 21%;
		z-index: 2;
		overflow: visible;
	}
	.slide {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		flex: auto;
		align-items: center;
		width: 50vw;
	}
	.slide-1 {
		left: 0;
		justify-content: flex-end;
	}
	.slide-2 {
		right: 0;
	}
	.box {
		width: 100vw;
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
