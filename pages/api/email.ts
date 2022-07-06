import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

interface Data {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
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
}
