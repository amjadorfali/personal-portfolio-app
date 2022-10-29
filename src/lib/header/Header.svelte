<script lang="ts">
	// import Drawer, { AppContent, Content } from '@smui/drawer';
	// import List, { Item, Text } from '@smui/list';

	// import { page } from '$app/stores';
	// import MediaQuery from '$lib/MediaQuery.svelte';
	// import { customSlide } from '$lib/initialLoader.svelte';
	// import { cubicInOut } from 'svelte/easing';
	// import { crossfade, fade } from 'svelte/transition';
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
