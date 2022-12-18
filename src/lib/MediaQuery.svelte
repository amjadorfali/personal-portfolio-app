<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { onMount } from 'svelte';

	const dispatch = createEventDispatcher();
	export let query: string;

	let mql: MediaQueryList;
	let mqlListener: (this: MediaQueryList, ev: MediaQueryListEvent) => any;
	let wasMounted = false;
	let matches = false;

	export let eventName: string;

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
			console.log('unmounted');
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

	$: console.log('matches', matches);
</script>

<slot matches="{matches}" />
