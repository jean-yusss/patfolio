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
	}
];

export const getThemes = () => themes;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(themes);
}
