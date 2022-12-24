<script lang="ts">
	import MobileMenu from './mobileMenu.svelte';
	import DesktopMenu from './desktopMenu.svelte';
</script>

<!-- Hamburger animation menu icon -->
<header class="grid">
	<slot />
	<DesktopMenu />
	<MobileMenu />
</header>

<style>
	header {
		position: fixed;
		z-index: 1;
		background-color: var(--primary);
		grid-template-columns: 0.5fr 1fr 0.5fr;
		top: 0;
		left: 0;
		right: 0;
		opacity: 0.95;
	}
</style>
