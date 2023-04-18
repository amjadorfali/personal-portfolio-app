<script lang="ts">
	export let className = 'w-5 h-5';
	export let style = '';
</script>

<svg {style} class={className} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
	<path
		opacity="0.7"
		d="M0.00376155 3.77639C0.00376155 1.97156 1.81063 0.166739 3.61751 0.166739C5.42439 0.166739 7.23126 1.97156 7.23126 3.77639C7.23126 5.58122 5.42439 7.38605 3.61751 7.38605C1.20834 6.78444 0.00376155 5.58122 0.00376155 3.77639Z"
		fill="white"
	/>
</svg>

<style>
	/* //FIXME : Fix styles */
	path {
		--user-pref-blacknwhite-rgb: black;
		fill: --user-pref-blacknwhite-rgb;
		@media (prefers-color-scheme: dark) {
			--user-pref-blacknwhite-rgb: white;
		}
	}
</style>
