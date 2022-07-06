import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
	{
		id: 1,
		name: 'Patfolio',
		image: 'https://i.imgur.com/WYrsTsL.jpg',
		description:
			'A portfolio website inspired by the source-code editor: Visual Studio Code for macOS.',
		tags: [
			'NextJS',
			'React',
			'Node',
			'TailwindCSS',
			'TypeScript',
			'SendGrid',
			'Styled-Components'
		],
		source: 'https://github.com/jean-yusss/patfolio',
		demo: 'https://patfolio.vercel.app/'
	},
	{
		id: 2,
		name: 'Reddit Clone',
		image: 'https://i.imgur.com/kcRcZnp.jpg',
		description: 'A full-stack clone web application of Reddit.',
		tags: [
			'NextJS',
			'React',
			'Node',
			'TypeScript',
			'GraphQL',
			'PostgreSQL',
			'Styled-Components'
		],
		source: 'https://github.com/jean-yusss/reddit-clone',
		demo: 'https://patrick-reddit-clone.vercel.app/'
	},
	{
		id: 3,
		name: 'Netflix Clone',
		image: 'https://i.imgur.com/E4xv6Pf.jpg',
		description: 'A clone web application of Netflix.',
		tags: [
			'NextJS',
			'React',
			'Node',
			'Styled-Components',
			'Stripe',
			'Firebase',
			'MaterialUI',
			'TailwindCSS'
		],
		source: 'https://github.com/jean-yusss/netflix-clone',
		demo: 'https://patrick-netflix-clone.vercel.app/'
	}
];

export const getProjects = () => projects;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(projects);
}
