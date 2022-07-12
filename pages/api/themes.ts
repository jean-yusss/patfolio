import { NextApiRequest, NextApiResponse } from 'next';

const themes = [
	{
		id: 1,
		theme: 'Dracula Official',
		developers: 'Dracula Theme',
		image: 'https://i.imgur.com/VPl7GUr.png'
	},
	{
		id: 2,
		theme: 'GitHub Dark Dimmed',
		developers: 'GitHub',
		image: 'https://i.imgur.com/pZQP6BH.png'
	},
	{
		id: 3,
		theme: 'Winter Is Coming',
		developers: 'John Papa',
		image: 'https://i.imgur.com/JYiuLAH.png'
	},
	{
		id: 4,
		theme: "SynthWave '84",
		developers: 'Robb Owen',
		image: 'https://i.imgur.com/orMu9PP.png'
	},
	{
		id: 5,
		theme: 'Nord',
		developers: 'arcticicestudio',
		image: 'https://i.imgur.com/7NuYMjD.png'
	},
	{
		id: 6,
		theme: 'Shades Of Purple',
		developers: 'Ahmad Awais',
		image: 'https://i.imgur.com/qqX3K2E.png'
	},
	{
		id: 7,
		theme: 'Vue Theme',
		developers: 'mariorodeghiero',
		image: 'https://i.imgur.com/38AizNw.png'
	},
	{
		id: 8,
		theme: 'Tokyo Night Storm',
		developers: 'enkia',
		image: 'https://i.imgur.com/ikdlDq0.png'
	}
];

export const getThemes = () => themes;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(themes);
}
