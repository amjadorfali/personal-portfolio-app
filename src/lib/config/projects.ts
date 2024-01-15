import JustDoItLogo from '$lib/assets/just-do-it-logo.png?w=64&h=64&format=webp&imagetools';
import WashmenLogo from '$lib/assets/washmen-logo.png?w=64&h=64&format=webp&imagetools';
import PortfolioLogo from '$lib/assets/favicon.png?w=64&h=64&format=webp&imagetools';

interface Project {
	images?: string[];
	literals: { name: string; description: string; summary: string; subSummary?: string };
	config: { path: string; logo: string; title: string; metaDescription: string };
	urls?: { site?: string; github?: { api?: string; client?: string } };
}

const getWashmenProjects = () =>
	[
		{
			title: 'Sorting Station',
			text: "The feature was the starting point of the items' journey. It was responsible for assigning the customer their items. The system allows the automatic insertion of item details. The feature also included a resolution center to ease communication between the staff"
		},
		{
			title: 'Stain-man Station',
			text: 'An app to maintain quality assurance for item issues and manage customer expectations if the stains found on garments were removed.The platform allowed for communication with the customers if there was a failure to remove a stain or fix damage to manage expectations and ensure customer satisfaction'
		},
		{
			title: 'Pending-items Station',
			text: 'Acts as a communication tool between our facility and customers, by managing expectation and informing our customers of any delays in advance.It also acts as an investigation tool for the dispatchers to find any items along with its status by providing all related information'
		},
		{
			title: 'Customer Portal',
			text: 'A portal where status updates were sent to the customer to notify them of the status of their items.It ensured the customer knew about any delays to the item delivery ahead of time.It can request approval for the cleaning of delicate items'
		},
		{
			text: "Unfortunately, all those projects are internal apps for the company, so I don't have permission to share links or more info regarding them"
		}
	].reduce(
		(prev, { text, title }) => (prev += `${title ? `<h4  class='card-header'>${title}</h4> <br/>` : ''} ${text}<br/><br/><br/><br/><br/>`),
		''
	);

export const projects: Project[] = [
	{
		literals: {
			name: 'Just Do It',
			summary: 'A simple todo app, built with React, MongoDB, GraphQL, and NestJS',
			description: `All your life people have been telling you you can’t do things. I’m here to tell you that you can. In fact, you can do anything you want. You just need to believe in yourself. SO JUST DO IT!`
		},
		config: {
			logo: JustDoItLogo,
			path: 'just-do-it',
			title: 'Just Do It!',
			metaDescription:
				'JUST DO IT!'
			// 'Boost your productivity with Just Do It, a powerful todo app built with cutting-edge technologies. As the developer behind this app, I can showcase my expertise in React, MongoDB, GraphQL, and NestJS. Discover how Just Do It can help you get things done.'
		},
		urls: {
			github: { client: 'https://github.com/amjadorfali/todo-react-app', api: 'https://github.com/amjadorfali/todo-API' },
			site: 'https://angry-amjads-homepage.netlify.app/'
		}
	},

	{
		literals: {
			name: 'Washmen',
			summary: 'Exceptional cleaning at our award winning facility in UAE',
			subSummary: 'My full-time job!',
			description: getWashmenProjects()
		},
		config: {
			logo: WashmenLogo,
			path: 'washmen',
			title: 'Washmen - Your One-Stop Laundry and Dry Cleaning Solution in the UAE | My Work Experience',
			metaDescription:
				"Find the best laundry and dry cleaning services in the UAE with Washmen. As an employee, I have firsthand experience with the company's reliable and efficient services. Learn more about my role and contributions at Washmen."
		},
		urls: {
			site: 'https://washmen.com'
		}
	},
	{
		literals: {
			name: 'Personal Portfolio',
			summary: 'Designed with the Svelte, TailwindCSS, and zap!',
			description: `
				Runs on Svelte & SvelteKit, TypeScript, and painted with TailwindCSS and Skeleton UI.
				`
		},
		config: {
			logo: PortfolioLogo,
			path: 'personal-portfolio',
			title: 'Personal Portfolio - Showcase of My Projects, Skills, and Achievements | My Work',
			metaDescription:
				'Explore my personal portfolio and discover my skills, projects, and achievements. As the creator of this portfolio, I have used Svelte, Skeleton UI, and TailwindCss to build a stunning and responsive website. See how I can add value to your business with my skills and experience.'
		},
		urls: { github: { client: 'https://github.com/amjadorfali/personal-portfolio-app' }, site: 'https://amjadorfali.com' }
	}
];

export const projectsKeyedByPath = projects.reduce<{ [key in string]: Project }>((acc, curr) => {
	acc[curr.config.path] = curr;
	return acc;
}, {});

export const projectTuples = projects.reduce<[Project?, Project?][]>((acc, curr) => {
	const lastArray = acc[acc.length - 1];
	if (!lastArray || [0, 2].includes(lastArray?.length)) {
		acc.push([curr]);
	} else {
		acc.push([acc.pop()?.[0], curr]);
	}

	return acc;
}, []);
