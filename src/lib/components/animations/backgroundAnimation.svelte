<script lang="ts">
	import { gsap } from 'gsap';

	import BlinkIcon from '$lib/assets/blink.svelte';

	import { onMount } from 'svelte';

	const BlinkIconsCount = 100;
	const blinkIcons: { icon: typeof BlinkIcon }[] = [];
	for (let index = 0; index < BlinkIconsCount; index++) {
		blinkIcons.push({ icon: BlinkIcon });
	}
	// Animations
	onMount(() => {
		const blinkIcons = gsap.utils.selector('.main-wrapper')('.blink-icon');
		//Transition accross screen
		gsap.from(blinkIcons, {
			ease: 'power2.inOut',
			x: '120vw',
			duration: Math.floor(Math.random() * 11) + 10,
			stagger: 1,
			repeat: -1
		});

		//Glow effect
		gsap.from(blinkIcons, {
			ease: 'power2.in',
			duration: 1.5,
			repeat: -1,
			repeatDelay: 3,
			stagger: 2,
			yoyo: true,
			boxShadow: '0px 0px 32px 1px rgba(255,255,255, 5)'
		});
	});
</script>

<div class="w-full h-full fixed z-[-1] main-wrapper">
	{#each blinkIcons as { icon: Icon }}
		<Icon className={`blink-icon absolute`} style={`top:${Math.floor(Math.random() * 91) + 5}vh; left : -10vw; `} />
	{/each}
</div>
