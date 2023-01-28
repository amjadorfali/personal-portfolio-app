<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import './styles.css';
	import Header from '$lib/header/Header.svelte';
	import { page } from '$app/stores';
	import { crossfade, fade } from 'svelte/transition';
	import InitialLoader from '$lib/initialLoader.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { routes } from '$lib/config/routes';
	import CustomDrawer from '$lib/CustomDrawer/CustomDrawer.svelte';

	const [send, receive] = crossfade({
		duration: 500,
		easing: cubicInOut
	});
	let canStartApp = $page.url.pathname !== '/',
		sendLogoToHeader = $page.url.pathname !== '/';
</script>

<!-- //TODO : Lazy Loading ... -->
<!-- https://svelte.dev/repl/09abb8c287f745169f66f62d51f766d5?version=3.49.0 -->
<CustomDrawer />

{#if canStartApp}
	<div class="bg-primary" in:fade={{ duration: 500, delay: 100 }} on:introend={() => (sendLogoToHeader = true)}>
		{#if sendLogoToHeader}
			<Header>
				<a
					href={routes[0].url}
					class="unstyled  logo-wrapper grid-cols-2 gap-5 p-7 transition-all duration-150 hover:shadow-lg active:shadow-lg hover:-skew-y-3 active:-skew-y-3 hover:skew-x-3 active:skew-x-3 "
				>
					<img src={'favicon.png'} in:receive={{ key: 'logo' }} alt="" class="w-12 h-w-12 prevent-select " />
					<div>
						<h4 class="dark:text-primary-300 text-surface-900 w-max ">Amjad Orfali <br />Software Engineer</h4>
					</div>
				</a>
			</Header>
		{/if}

		<main class={$page.url.pathname === routes[0].url ? 'flex relative items-center justify-center align-middle' : ''}>
			<slot />

			{#if !sendLogoToHeader}
				<svg out:send={{ key: 'logo' }} class="absolute circle" viewBox="0 0 500 700">
					<g fill="none" fill-rule="evenodd" stroke="black">
						<g stroke-width="7.5" stroke="white">
							<circle class="dark:stroke-primary-300 stroke-surface-900" cx="263" cy="390" r="240" />
						</g>
						<g>
							<path
								class="dark:fill-primary-300 fill-surface-900  "
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
	a img.prevent-select {
		-webkit-user-select: none; /* Safari */
		-ms-user-select: none; /* IE 10 and IE 11 */
		user-select: none; /* Standard syntax */
	}
	.logo-wrapper {
		margin-left: 8px;
		height: 3rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	svg.circle {
		width: 21%;
		opacity: 0.25;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}
	div h4 {
		font-size: 1rem;
		line-height: normal;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
