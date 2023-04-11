export type RouteKeys = 'home' | 'about' | 'projects' | 'contact';

type Route = { url: string; label: string; key: RouteKeys };
export const routes: Route[] = [
	{ url: '/', label: 'Home', key: 'home' },
	{ url: '/about', label: 'About', key: 'about' },
	{ url: '/projects', label: 'Projects', key: 'projects' },
	{ url: '/contact', label: 'Contact', key: 'contact' }
];

type KeyedRoutes = { [key in RouteKeys]: Route };

/** @description Routes keyed by `RouteKeys`. E.g: 'home' | 'about' ... */
export const keyedRoutes = routes.reduce<KeyedRoutes>((acc, curr) => {
	acc[curr.key] = curr;
	return acc;
}, {} as KeyedRoutes);


/** @description Cleans up a string from all nested urls, and returns the route if found */
export const routeFromUrl = (url: string | null = '') => {
	const cleanUrl = (url || '').replace(/^(\/[^/]+).*$/, '$1');
	return routes.find((route) => route.url === cleanUrl)
}


