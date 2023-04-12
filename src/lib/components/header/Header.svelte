<script lang="ts">
	import MobileMenu from './mobileMenu.svelte';
	import DesktopMenu from './desktopMenu.svelte';
</script>

<!-- Hamburger animation menu icon -->
<header class="bg-surface-50-900-token grid px-[0.3rem] pb-[0.3em]">
	<slot />
	<DesktopMenu />
	<MobileMenu />
</header>

<style>
	header {
		position: fixed;
		z-index: 1;
		grid-template-columns: 0.5fr 1fr 0.2fr 0.1fr;
		top: 0;
		left: 0;
		right: 0;
		opacity: 0.95;
	}

	@media (min-width: 1000px) {
		header {
			grid-template-columns: 0.5fr 1fr 0.5fr;
		}
	}
</style>
