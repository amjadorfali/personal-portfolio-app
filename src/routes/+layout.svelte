<script lang="ts">
	// ---- Should be imported first ----
	import './styles.scss';

	// ------------------------------------
	import { scale } from 'svelte/transition';
</script>

<div class="bg-primary z-[0]">
	<main in:scale|global out:scale|global={{ duration: 200 }}>
		<slot />
	</main>
</div>
