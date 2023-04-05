<script lang="ts">
	import { gsap } from 'gsap';

	import BlinkIcon from '$lib/assets/blink.svelte';

	import { onMount } from 'svelte';

	const BlinkIconsCount = 60;
	const blinkIcons: { icon: typeof BlinkIcon }[] = [];
	for (let index = 0; index < BlinkIconsCount; index++) {
		blinkIcons.push({ icon: BlinkIcon });
	}
	// Animations
	onMount(() => {
		gsap.from(gsap.utils.selector('.main-wrapper')('.blink-icon'), {
			ease: 'power2.inOut',
			x: '110vw',
			duration: Math.floor(Math.random() * 20),
			stagger: 1,
			repeat: -1
		});
	});
</script>

<div class="w-full h-full fixed z-[-1] main-wrapper">
	{#each blinkIcons as { icon: Icon }}
		<Icon className={`blink-icon absolute`} style={`top: ${Math.floor(Math.random() * 100)}vh; left : -1vw; `} />
	{/each}
</div>
