import type { Actions } from './$types';
import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

export const actions = {
	default: async (event) => {
		// using Twilio SendGrid's v3 Node.js Library
		// https://github.com/sendgrid/sendgrid-nodejs
		try {
			const data = await event.request.formData();
			const name = data.get('name');
			const email = data.get('email');
			const message = data.get('message');
			sgMail.setApiKey(SENDGRID_API_KEY);
			const msg = {
				to: 'amjadorfali3+sendgrid@gmail.com', // Change to your recipient
				from: 'amjadetto+sendgrid@gmail.com', // Change to your verified sender
				subject: `Form submission from ${name}`,
				text: `Email : ${email} \n Message : ${message} `,
				html: `
                <strong>
                    Email :  ${email}
                </strong>
                <br/>
                <p>
                    ${message}
                </p>
            `
			};

			await sgMail.send(msg);
			console.log('Email Sent!');

			return { success: true };
		} catch (error) {
			console.error(error);
			return { success: false };
		}
	}
} satisfies Actions;

export const prerender = false;
