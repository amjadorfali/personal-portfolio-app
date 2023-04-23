import { Sine, gsap } from 'gsap';

import { type RouteKeys, routeFromUrl } from '$lib/config';

import BlinkIcon from '$lib/assets/blink.svelte';
import StarIcon from '$lib/assets/star.svelte';
import MoonIcon from '$lib/assets/planet-moon.svelte';
import LightIcon from '$lib/assets/planet-light.svelte';
import XenonIcon from '$lib/assets/planet-xenon.svelte';
import VoidIcon from '$lib/assets/planet-void.svelte';

interface AnimationOptions {
	wrapper: string;
	childrenKeys: string[];
}

type PlanetIcon = typeof MoonIcon;
//Config
const BlinkIconsCount = 30;
const blinkIcons: { icon: typeof BlinkIcon }[] = [];

const StarIconsCount = 10;
const starIcons: { icon: typeof StarIcon }[] = [];

interface PlanetRoute {
	planet: PlanetIcon;
	position: number;
}
const routeConfig: {
	[key in RouteKeys]: PlanetRoute;
} = {
	home: {
		planet: XenonIcon,
		position: 0
	},
	about: {
		planet: VoidIcon,
		position: 1
	},
	projects: {
		planet: LightIcon,
		position: 2
	},
	contact: {
		planet: MoonIcon,
		position: 3
	}
};

for (let index = 0; index < BlinkIconsCount; index++) {
	blinkIcons.push({ icon: BlinkIcon });
}

for (let index = 0; index < StarIconsCount; index++) {
	starIcons.push({ icon: StarIcon });
}

const animateAmbience = (options: AnimationOptions) => {
	const blinkIconsRendered = gsap.utils.selector(options.wrapper)(options.childrenKeys[0]);
	const starIconsRendered = gsap.utils.selector(options.wrapper)(options.childrenKeys[1]);
	gsap.to(starIconsRendered, { y: '+=30', ease: Sine.easeInOut, duration: 10, yoyo: true, repeat: -1, stagger: 0.4 });

	//Transition accross screen
	gsap.to(blinkIconsRendered, {
		ease: 'power2.in',
		x: '0vw',
		// duration: Math.floor(Math.random() * 50) + 5,
		duration: Math.floor(Math.random() * 30),
		stagger: {
			each: 1,
			repeat: -1
			// axis: 'x'
		}
	});

	//Glow effect
	gsap.from(blinkIconsRendered, {
		ease: 'power2.inOut',
		duration: 2,
		stagger: 2,
		repeat: -1,
		repeatDelay: 3,
		yoyo: true,
		//FIXME : Fix different colors for light/dark mode - Either by Skeleton APIs or Gsap.matchMedia
		// boxShadow: '0px 0px 32px 1px var(--light-dark)'
		boxShadow: '0px 0px 32px 1px rgba(255,255,255,1)'
	});
};

const findSign = (nextPosition: number, prevPosition: number) => {
	return nextPosition > prevPosition ? -1 : 1;
};

const timeLine = gsap.timeline();
const hideToRight = '130vw';
const hideToLeft = '-100vw';
const calculatePlanetX = (pageUrl: string | null, prevPageUrl = '') => {
	const routeNow = routeFromUrl(pageUrl);
	const prevRoute = routeFromUrl(prevPageUrl);

	if (!routeNow) return;

	const { position: nextPosition } = routeConfig[routeNow.key as RouteKeys];
	const prevRouteConf = routeConfig[prevRoute?.key as RouteKeys];

	const timeLineIsActive = timeLine.isActive();
	//Hide prev route if its present
	if (prevRoute && prevRouteConf) {
		timeLine.to(
			`.${prevRoute?.key}-planet-icon`,
			{
				x: `${findSign(nextPosition, prevRouteConf.position) * 130}vw`,
				ease: Sine.easeInOut,
				duration: 1,
				overwrite: true
			},
			timeLineIsActive ? '-=1' : undefined
		);
	} else {
		//On intro to site - hide all planets
		Object.entries(routeConfig).forEach(([key, config]) => {
			if (key !== routeNow.key) {
				timeLine.set(`.${key}-planet-icon`, { x: config.position / (Object.keys(routeConfig).length / 2) > 1 ? hideToRight : hideToLeft });
			}
		});
	}

	if (timeLineIsActive) {
		timeLine.to(
			`.${routeNow.key}-planet-icon`,

			{
				x: `${(nextPosition + 1) * 17}vw`,
				ease: Sine.easeInOut,
				duration: 1,
				overwrite: true
			},
			'-=1'
		);
	} else {
		timeLine.fromTo(
			`.${routeNow.key}-planet-icon`,
			{
				x: prevRouteConf
					? findSign(nextPosition, prevRouteConf.position) === 1
						? hideToLeft
						: hideToRight
					: nextPosition / (Object.keys(routeConfig).length / 2) >= 1
						? hideToRight
						: hideToLeft,
				overwrite: true
			},
			{
				x: `${(nextPosition + 1) * 17}vw`,
				ease: Sine.easeInOut,
				overwrite: true,
				duration: 0.5
			},
			'<'
		);
	}
};
export { animateAmbience, starIcons, blinkIcons, routeConfig, calculatePlanetX };
