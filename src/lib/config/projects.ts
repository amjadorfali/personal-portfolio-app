interface Project {
	name: string;
	images: string[];
	description: string;
	github?: string;
	url?: string;
	path: string;
}

export const projects: Project[] = [
	{
		name: 'Just Do It',
		path: 'just-do-it',
		github: 'https://github.com/amjadorfali/todo-react-app',
		url: 'https://angry-amjads-homepage.netlify.app/',
		images: ['todo-img.png'],
		description:
			'A simple react-based to-do app, built on a full-stack basis, with automated CI/CDs from GitHub to Heroku, using React, Graphql, MongoDB, and NestJS. Most importantly, fully typed, with many artistic animations and great UX'
	},
	{
		name: 'todo-API',
		path: 'todo-api',
		github: 'https://github.com/amjadorfali/todo-API',
		description: 'A fully typed NestJS backend, wired with GraphQL, talks with MongoDB, and runs on Heroku!',
		images: []
	},
	{
		name: 'Sorting Station',
		path: 'sorting-station',
		description:
			"The feature was the starting point of the items' journey. It was responsible for assigning the customer their items. The system allows the automatic insertion of item details. The feature also included a resolution center to ease communication between the staff",
		images: []
	},
	{
		name: 'Stain-man Station',
		path: 'stain-man-station',
		description:
			'An app to maintain quality assurance for item issues and manage customer expectations if the stains found on garments were removed. The platform allowed for communication with the customers if there was a failure to remove a stain or fix damage to manage expectations and ensure customer satisfaction',
		images: []
	},
	{
		name: 'Pending-items Station',
		path: 'pending-items-station',
		description:
			'Acts as a communication tool between our facility and customers, by managing expectation and informing our customers of any delays in advance. It also acts as an investigation tool for the dispatchers to find any items along with its status by providing all related information',
		images: []
	},
	{
		name: 'Customer Portal',
		path: 'customer-portal',
		description:
			'A portal where status updates were sent to the customer to notify them of the status of their items. It ensured the customer knew about any delays to the item delivery ahead of time. It can request approval for the cleaning of delicate items',
		images: []
	}
];

export const normalizedProjects = projects.reduce<{ [key in string]: Project }>((acc, curr) => {
	acc[curr.name] = curr;
	return acc;
}, {});
