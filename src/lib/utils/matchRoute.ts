import { keyedRoutes } from '$lib/config';

export const matchRoute = (url: string, pathName: string) => {
	if (url === keyedRoutes.home.url) return pathName === url;
	else return pathName.startsWith(url);
};
