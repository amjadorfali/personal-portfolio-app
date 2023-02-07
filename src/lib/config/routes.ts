type RouteKeys = 'home' | 'about' | 'projects' | 'contact';
type Route = { url: string; label: string; key: RouteKeys };
export const routes: Route[] = [
	{ url: '/', label: 'Home', key: 'home' },
	{ url: '/about', label: 'About', key: 'about' },
	{ url: '/projects', label: 'Projects', key: 'projects' },
	{ url: '/contact', label: 'Contact', key: 'contact' }
];

type KeyedRoutes = { [key in RouteKeys]: Route };
export const keyedRoutes = routes.reduce<KeyedRoutes>((acc, curr) => {
	acc[curr.key] = curr;
	return acc;
}, {} as KeyedRoutes);
