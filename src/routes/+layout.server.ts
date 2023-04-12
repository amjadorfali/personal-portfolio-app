import type { PageLoad } from './$types';
import { GTAG } from '$env/static/private';

export const load: PageLoad = () => {
	return { key: GTAG };
};
