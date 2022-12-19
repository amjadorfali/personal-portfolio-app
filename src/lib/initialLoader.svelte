<script lang="ts" context="module">
	export function customSlide(node: Element, params: SlideParams = { duration: 1000, easing: cubicIn }): TransitionConfig {
		const style = getComputedStyle(node);
		const width = parseFloat(style.width);
		return {
			...params,
			css: (t) => {
				const easing = (params.easing || cubicIn)(t);
				return `width: ${easing * width}px;` + '';
			}
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
		timeout = setTimeout(() => dispatch('transitionsEnded'), 100);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
{#if visibile}
	<div class="box flex" out:fade>
		<div
			in:customSlide={{ duration: 1000 }}
			on:introend={() => {
				transitioned = true;
			}}
			class="slide slide-1  bg-secondary"
		>
			{#if !transitioned}
				<svg
					clip-path="polygon(50% 0, 0 0, 0 100%, 50% 100%)"
					class="letter"
					fill="white"
					version="1.1"
					viewBox="0 0 500 700"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g transform="matrix(0.75 0 0 0.75 250 350)">
						<path
							style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
							transform=" translate(-262.92, -359.82)"
							d="M 395.36 542.5 C 391.317 542.5 388.14910000000003 541.55469 385.68420000000003 539.6133 C 383.11 537.5821 381.2936 535.0625 380.153 531.8593999999999 L 346.641 443.15239999999994 L 179.20100000000002 443.15239999999994 L 145.705 531.7893999999999 C 144.72453000000002 534.5002999999999 142.8339 536.9885999999999 140.08780000000002 539.2424999999998 C 137.4472 541.4143999999999 134.3144 542.4612999999998 130.47840000000002 542.4612999999998 L 93.52140000000003 542.4652059999999 L 237.67140000000003 177.13520599999987 L 288.1754 177.13520599999987 L 432.32540000000006 542.4952059999998 z M 259.4 224.58999999999997 C 257.52889999999996 231.95719999999997 255.60309999999998 238.88699999999997 253.66169999999997 245.16799999999998 C 251.72029999999998 251.4492 249.81009999999998 257.137 247.95859999999996 262.07399999999996 L 191.66159999999996 410.84399999999994 L 334.4316 410.84399999999994 L 277.87260000000003 261.554 C 273.9859 251.84309999999996 270.0484 239.41699999999997 266.16560000000004 224.57699999999997 L 262.7359 211.45199999999997 z"
							stroke-linecap="round"
						/>
					</g>
				</svg>
			{/if}
		</div>

		{#if transitioned}
			<svg viewBox="0 0 500 700" class="circle" class:drawDone>
				<g fill="none" fill-rule="evenodd" stroke="black">
					<g stroke-width="7.5" stroke="white">
						<circle in:draw={{ duration: 1000 }} on:introend={circleDrawEnd} cx="250" cy="350" r="250" />
					</g>

					<g transform="matrix(0.75 0 0 0.75 250 350)">
						<path
							style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
							transform=" translate(-262.92, -359.82)"
							d="M 395.36 542.5 C 391.317 542.5 388.14910000000003 541.55469 385.68420000000003 539.6133 C 383.11 537.5821 381.2936 535.0625 380.153 531.8593999999999 L 346.641 443.15239999999994 L 179.20100000000002 443.15239999999994 L 145.705 531.7893999999999 C 144.72453000000002 534.5002999999999 142.8339 536.9885999999999 140.08780000000002 539.2424999999998 C 137.4472 541.4143999999999 134.3144 542.4612999999998 130.47840000000002 542.4612999999998 L 93.52140000000003 542.4652059999999 L 237.67140000000003 177.13520599999987 L 288.1754 177.13520599999987 L 432.32540000000006 542.4952059999998 z M 259.4 224.58999999999997 C 257.52889999999996 231.95719999999997 255.60309999999998 238.88699999999997 253.66169999999997 245.16799999999998 C 251.72029999999998 251.4492 249.81009999999998 257.137 247.95859999999996 262.07399999999996 L 191.66159999999996 410.84399999999994 L 334.4316 410.84399999999994 L 277.87260000000003 261.554 C 273.9859 251.84309999999996 270.0484 239.41699999999997 266.16560000000004 224.57699999999997 L 262.7359 211.45199999999997 z"
							stroke-linecap="round"
						/>
					</g>
				</g>
			</svg>
		{/if}

		<div in:customSlide={{ duration: 1000 }} class="slide slide-2  bg-secondary">
			{#if !transitioned}
				<svg
					clip-path="polygon(50% 0, 100% 0, 100% 100%, 50% 100%)"
					class="letter"
					fill="white"
					version="1.1"
					viewBox="0 0 500 700"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g transform="matrix(0.75 0 0 0.75 250 350)">
						<path
							style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;"
							transform=" translate(-262.92, -359.82)"
							d="M 395.36 542.5 C 391.317 542.5 388.14910000000003 541.55469 385.68420000000003 539.6133 C 383.11 537.5821 381.2936 535.0625 380.153 531.8593999999999 L 346.641 443.15239999999994 L 179.20100000000002 443.15239999999994 L 145.705 531.7893999999999 C 144.72453000000002 534.5002999999999 142.8339 536.9885999999999 140.08780000000002 539.2424999999998 C 137.4472 541.4143999999999 134.3144 542.4612999999998 130.47840000000002 542.4612999999998 L 93.52140000000003 542.4652059999999 L 237.67140000000003 177.13520599999987 L 288.1754 177.13520599999987 L 432.32540000000006 542.4952059999998 z M 259.4 224.58999999999997 C 257.52889999999996 231.95719999999997 255.60309999999998 238.88699999999997 253.66169999999997 245.16799999999998 C 251.72029999999998 251.4492 249.81009999999998 257.137 247.95859999999996 262.07399999999996 L 191.66159999999996 410.84399999999994 L 334.4316 410.84399999999994 L 277.87260000000003 261.554 C 273.9859 251.84309999999996 270.0484 239.41699999999997 266.16560000000004 224.57699999999997 L 262.7359 211.45199999999997 z"
							stroke-linecap="round"
						/>
					</g>
				</svg>
			{/if}
		</div>
	</div>
{/if}

<style>
	svg.drawDone path {
		transition: all 0.25s ease-in-out;
		fill: var(--secondary);
	}

	svg.drawDone circle {
		transition: all 0.25s ease-in-out;
		stroke: var(--secondary);
	}
	svg.drawDone circle,
	svg.drawDone path {
		animation: fade 0.5s linear 0.25s forwards;
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
