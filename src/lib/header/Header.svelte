<script lang="ts">
	import MobileMenu from './mobileMenu.svelte';
	import DesktopMenu from './desktopMenu.svelte';
</script>

<!-- Hamburger animation menu icon -->
<header class="relative grid">
	<slot />
	<DesktopMenu />
	<MobileMenu />
</header>

<style>
	header {
		grid-template-columns: 0.5fr 1fr 0.5fr;
	}
</style>
