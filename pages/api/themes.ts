import { NextApiRequest, NextApiResponse } from 'next';

const themes = [
	{
		theme: 'Dracula Official',
		developers: 'Dracula Theme',
		image: 'https://i.imgur.com/VPl7GUr.png'
	},
	{
		theme: 'GitHub Dark Dimmed',
		developers: 'GitHub',
		image: 'https://i.imgur.com/pZQP6BH.png'
	}
];

export const getThemes = () => themes;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(themes);
}
