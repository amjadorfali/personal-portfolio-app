import { GTAG } from '$env/static/private';
import type { PageData } from './$types';

export const load: () => PageData = () => {
	return { key: GTAG };
};

// https://kit.svelte.dev/docs/page-options#prerender
export const prerender = true;
