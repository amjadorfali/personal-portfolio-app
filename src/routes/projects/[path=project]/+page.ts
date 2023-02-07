import { projectsKeyedByPath } from '$lib/config';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
	return projectsKeyedByPath[params.path];
}) satisfies PageLoad;
