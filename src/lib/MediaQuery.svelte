<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let query: string;

	let mql: MediaQueryList;

	//Choosing to ignore `any` type as that's the type provided from type `MediaQueryList`
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let mqlListener: (this: MediaQueryList, ev: MediaQueryListEvent) => any;
	let wasMounted = false;
	let matches = false;

	$: {
		if (matches) {
			dispatch('in');
		} else {
			dispatch('out');
		}
	}

	onMount(() => {
		wasMounted = true;
		return () => {
			removeActiveListener();
		};
	});

	$: {
		if (wasMounted) {
			removeActiveListener();
			addNewListener(query);
		}
	}

	function addNewListener(query: string) {
		mql = window.matchMedia(query);
		mqlListener = (v) => (matches = v.matches);
		mql.addEventListener('change', mqlListener);
		matches = mql.matches;
	}

	function removeActiveListener() {
		if (mql && mqlListener) {
			mql.removeEventListener('change', mqlListener);
		}
	}
</script>

<slot {matches} />
