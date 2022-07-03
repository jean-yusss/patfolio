import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

interface Data {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const { name, email, subject, message }: Data = req.body;

		const form = {
			to: 'iamtiredofyou2@gmail.com',
			from: 'pvtrk.dev@gmail.com',
			subject,
			html: `<strong>Name: ${name} <br/> Email: ${email} <br/> Message: ${message}</strong>`
		};

		try {
			await sendgrid.send(form);
			res.status(200).json({ status: 'ok' });
		} catch (error) {
			res.status(400).json({ status: 'fail' });
		}
	}
};
