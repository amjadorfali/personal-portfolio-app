import { projects } from '$lib/config';
import type { ParamMatcher } from '@sveltejs/kit';

export const match = ((param) => {
	return !!projects.find((project) => project.config.path === param.toLowerCase());
}) satisfies ParamMatcher;
