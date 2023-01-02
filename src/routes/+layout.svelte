<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import { page } from '$app/stores';
	import { crossfade, fade } from 'svelte/transition';
	import '../app.css';
	import InitialLoader from '$lib/initialLoader.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { routes } from '$lib/config/routes';

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut
	});
	let canStartApp = $page.url.pathname !== '/',
		sendLogoToHeader = $page.url.pathname !== '/';
</script>

<!-- //TODO : Lazy Loading ... -->
<!-- https://svelte.dev/repl/09abb8c287f745169f66f62d51f766d5?version=3.49.0 -->

{#if canStartApp}
	<div class="bg-primary " in:fade={{ duration: 500, delay: 100 }} on:introend={() => (sendLogoToHeader = true)}>
		<div class="header-wrapper">
			{#if sendLogoToHeader}
				<Header>
					<sl-button data-sveltekit-preload-data href={routes[0].url}>
						<div class="logo-wrapper">
							<!-- <sl-icon slot="prefix"> -->
							<svg in:receive={{ key: 'logo' }} class="circle-logo" viewBox="0 0 500 720">
								<g fill="none" fill-rule="evenodd" stroke="black">
									<g stroke-width="7.5" stroke="white">
										<circle cx="263" cy="390" r="320" />
									</g>
									<g>
										<path
											fill="white"
											d="m395.36 542.5c-4.043 0-7.2109-0.94531-9.6758-2.8867-2.5742-2.0312-4.3906-4.5508-5.5312-7.7539l-33.512-88.707h-167.44l-33.496 88.637c-0.98047 2.7109-2.8711 5.1992-5.6172 7.4531-2.6406 2.1719-5.7734 3.2188-9.6094 3.2188l-36.957 0.003906 144.15-365.33h50.504l144.15 365.36zm-135.96-317.91c-1.8711 7.3672-3.7969 14.297-5.7383 20.578-1.9414 6.2812-3.8516 11.969-5.7031 16.906l-56.297 148.77h142.77l-56.559-149.29c-3.8867-9.7109-7.8242-22.137-11.707-36.977l-3.4297-13.125z"
										/>
									</g>
								</g>
							</svg>
							<!-- </sl-icon> -->
							<div class="w-full">
								<h4>Amjad Orfali</h4>
								<h6>Software Engineer</h6>
							</div>
						</div>
					</sl-button>
				</Header>
			{/if}
		</div>

		<main class={$page.url.pathname === routes[0].url ? 'flex relative items-center justify-center align-middle' : ''}>
			<slot />
			{#if !sendLogoToHeader}
				<svg out:send={{ key: 'logo' }} class="absolute circle" viewBox="0 0 500 700">
					<g fill="none" fill-rule="evenodd" stroke="black">
						<g stroke-width="7.5" stroke="white">
							<circle cx="263" cy="390" r="240" />
						</g>
						<g>
							<path
								fill="white"
								d="m395.36 542.5c-4.043 0-7.2109-0.94531-9.6758-2.8867-2.5742-2.0312-4.3906-4.5508-5.5312-7.7539l-33.512-88.707h-167.44l-33.496 88.637c-0.98047 2.7109-2.8711 5.1992-5.6172 7.4531-2.6406 2.1719-5.7734 3.2188-9.6094 3.2188l-36.957 0.003906 144.15-365.33h50.504l144.15 365.36zm-135.96-317.91c-1.8711 7.3672-3.7969 14.297-5.7383 20.578-1.9414 6.2812-3.8516 11.969-5.7031 16.906l-56.297 148.77h142.77l-56.559-149.29c-3.8867-9.7109-7.8242-22.137-11.707-36.977l-3.4297-13.125z"
							/>
						</g>
					</g>
				</svg>
			{/if}
		</main>

		<footer />
	</div>
{:else}
	<InitialLoader on:transitionsEnded={() => (canStartApp = true)} />
{/if}

<style>
	sl-button::part(base) {
		/* Set design tokens for height and border width */
		--sl-input-height-medium: 100%;
		--sl-input-border-width: 0px;

		font-size: 1.125rem;
		transition: var(--sl-transition-medium) transform ease, var(--sl-transition-medium) border ease;
	}

	sl-button::part(base):hover {
		transform: scale(1.05) rotate(-1deg);
		color: inherit;
	}

	sl-button::part(base):active {
		transform: scale(1.05) rotate(-1deg) translateY(2px);
		/* color: brown; */
		/* background-color: aqua; */
	}

	.header-wrapper {
		min-height: 3rem;
	}

	.logo-wrapper {
		margin-left: 8px;
		width: 18rem;
		height: 3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	svg.circle {
		width: 21%;
		opacity: 0.25;
	}

	svg.circle-logo {
		opacity: 1;
		width: 50%;
		/* position: absolute; */
		height: 100%;
	}

	svg.circle-logo path {
		transition: fill 0.5s alternate;
		fill: var(--secondary);
	}

	svg.circle-logo circle {
		transition: stroke 0.5s alternate;
		stroke: var(--secondary);
	}

	svg path {
		fill: var(--secondary);
	}

	svg circle {
		stroke: var(--secondary);
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
	div h4,
	div h6 {
		color: var(--secondary);
		font-size: 1rem;
		line-height: normal;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
