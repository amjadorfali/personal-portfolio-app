<script lang="ts">
	export let href = '';
	export let text = '';
	export let className = '';
	export let target = '';
	export let rel = '';
	export let ariaLabel = '';
	export let underline = true;
	export let style = '';
</script>

<a
	{target}
	{rel}
	{href}
	{style}
	aria-label={ariaLabel}
	class={`my-link !text-primary-500  projects-link overflow-hidden text-base capitalize ${className}`}
>
	{text}
	<div class={`${underline && 'link-underline'}`} />
</a>

<style>
	.link-underline {
		position: relative;
		width: 100%;
		bottom: 0;
		left: 0;
		transform-origin: bottom right;
		transition: all 0.25s ease-in-out;
		transform: translateX(-101%) translateZ(0px);
		height: 0.2rem;
		background-color: rgb(var(--color-primary-500));
	}

	.my-link:hover > .link-underline {
		transform: translateX(0%) translateZ(0px);
	}
</style>
