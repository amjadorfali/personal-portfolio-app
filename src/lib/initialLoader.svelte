<script lang="ts" context="module">
	export function customSlide(node: Element, params: SlideParams = { duration: 1000, easing: cubicIn }): TransitionConfig {
		const style = getComputedStyle(node);
		const width = parseFloat(style.width);
		return {
			...params,
			css: (t) => {
				const easing = (params.easing || cubicIn)(t);
				return `width: ${easing * width}px;` + '';
			},
		};
	}
</script>

<script lang="ts">
	import { type TransitionConfig, type SlideParams, fade } from 'svelte/transition';

	import { draw } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { onMount, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let visibile = false,
		transitioned = false,
		drawDone = false;

	let timeout: NodeJS.Timeout | undefined;

	onMount(() => {
		visibile = true;
		() => clearTimeout(timeout);
	});

	const circleDrawEnd = () => {
		drawDone = true;
		//3 seconds is total of fade & transitions for Circle icon
		timeout = setTimeout(() => dispatch('transitionsEnded'), 1250);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
{#if visibile}
	<div class="box flex" out:fade>
		<div
			in:customSlide="{{ duration: 2500 }}"
			on:introend="{() => {
				transitioned = true;
			}}"
			class="slide slide-1  bg-secondary"
		>
			{#if !transitioned}
				<svg class="letter" fill="white" version="1.1" viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="polygon(50% 0, 0 0, 0 100%, 50% 100%)">
						<path
							d="m395.36 542.5c-4.043 0-7.2109-0.94531-9.6758-2.8867-2.5742-2.0312-4.3906-4.5508-5.5312-7.7539l-33.512-88.707h-167.44l-33.496 88.637c-0.98047 2.7109-2.8711 5.1992-5.6172 7.4531-2.6406 2.1719-5.7734 3.2188-9.6094 3.2188l-36.957 0.003906 144.15-365.33h50.504l144.15 365.36zm-135.96-317.91c-1.8711 7.3672-3.7969 14.297-5.7383 20.578-1.9414 6.2812-3.8516 11.969-5.7031 16.906l-56.297 148.77h142.77l-56.559-149.29c-3.8867-9.7109-7.8242-22.137-11.707-36.977l-3.4297-13.125z"
						></path>
					</g>
				</svg>
			{/if}
		</div>

		{#if transitioned}
			<svg viewBox="0 0 500 700" class="circle" class:drawDone>
				<g fill="none" fill-rule="evenodd" stroke="black">
					<g stroke-width="7.5" stroke="white">
						<circle in:draw="{{ duration: 2000 }}" on:introend="{circleDrawEnd}" cx="263" cy="390" r="230"></circle>
					</g>
					<g>
						<path
							fill="white"
							d="m395.36 542.5c-4.043 0-7.2109-0.94531-9.6758-2.8867-2.5742-2.0312-4.3906-4.5508-5.5312-7.7539l-33.512-88.707h-167.44l-33.496 88.637c-0.98047 2.7109-2.8711 5.1992-5.6172 7.4531-2.6406 2.1719-5.7734 3.2188-9.6094 3.2188l-36.957 0.003906 144.15-365.33h50.504l144.15 365.36zm-135.96-317.91c-1.8711 7.3672-3.7969 14.297-5.7383 20.578-1.9414 6.2812-3.8516 11.969-5.7031 16.906l-56.297 148.77h142.77l-56.559-149.29c-3.8867-9.7109-7.8242-22.137-11.707-36.977l-3.4297-13.125z"
						></path>
					</g>
				</g>
			</svg>
		{/if}

		<div in:customSlide="{{ duration: 2500 }}" class="slide slide-2  bg-secondary">
			{#if !transitioned}
				<svg class="letter" fill="white" version="1.1" viewBox="0 0 500 700" xmlns="http://www.w3.org/2000/svg">
					<g clip-path="polygon(50% 0, 100% 0, 100% 100%, 50% 100%)">
						<path
							d="m395.36 542.5c-4.043 0-7.2109-0.94531-9.6758-2.8867-2.5742-2.0312-4.3906-4.5508-5.5312-7.7539l-33.512-88.707h-167.44l-33.496 88.637c-0.98047 2.7109-2.8711 5.1992-5.6172 7.4531-2.6406 2.1719-5.7734 3.2188-9.6094 3.2188l-36.957 0.003906 144.15-365.33h50.504l144.15 365.36zm-135.96-317.91c-1.8711 7.3672-3.7969 14.297-5.7383 20.578-1.9414 6.2812-3.8516 11.969-5.7031 16.906l-56.297 148.77h142.77l-56.559-149.29c-3.8867-9.7109-7.8242-22.137-11.707-36.977l-3.4297-13.125z"
						></path>
					</g>
				</svg>
			{/if}
		</div>
	</div>
{/if}

<style>
	svg.drawDone path {
		transition: all 0.5s ease-in-out;
		fill: var(--secondary);
	}

	svg.drawDone circle {
		transition: all 0.5s ease-in-out;
		stroke: var(--secondary);
	}
	svg.drawDone circle,
	svg.drawDone path {
		animation: fade 0.75s linear 0.5s forwards;
		@keyframes fade {
			0% {
			}
			100% {
				opacity: 0.25;
			}
		}
	}
	svg {
		z-index: 1;
	}
	svg.letter {
		width: 42%;
		margin: -21%;
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
