<!-- <script lang="ts">
	import { env } from '$env/dynamic/public';
	// using Twilio SendGrid's v3 Node.js Library
	// https://github.com/sendgrid/sendgrid-nodejs
	import sgMail from '@sendgrid/mail';
	import type { MailDataRequired } from '@sendgrid/mail';

	sgMail.setApiKey(env.PUBLIC_SENDGRID_API_KEY ?? '');
	const msg: MailDataRequired = {
		to: 'amjadorfali3+testtest@gmail.com', // Change to your recipient
		from: 'amjadorfali3+sendgrid@gmail.com', // Change to your verified sender
		subject: 'Sending with SendGrid is Fun',
		text: 'and easy to do anywhere, even with Node.js',
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
		headers: { 'Access-Control-Allow-Origin': '*' }
	};

	const sendEmail = () => {
		sgMail
			.send(msg)
			.then(() => {
				console.log('Email sent');
			})
			.catch((error) => {
				console.error(error);
			});
	};
</script> -->

<!-- <button on:click={sendEmail}>Click me</button> -->
<!-- <form action="mailto:recipient@example.com" method="post" enctype="text/plain">
	<label for="name">Name:</label><br />
	<input type="text" id="name" name="name" /><br />
	<label for="email">Email:</label><br />
	<input type="text" id="email" name="email" /><br />
	<label for="message">Message:</label><br />
	<textarea id="message" name="message" /><br />
	<input type="submit" value="Send" />
</form> -->

<svelte:head>
	<title>Amjad | Contact</title>
	<meta name="description" content="Contact Amjad Orfali" />
</svelte:head>

<article class="flex items-center justify-center align-middle">
	<p>Page is under development</p>
</article>

<style>
	article {
		gap: 1rem;
		flex: 1;
		padding: 1rem;
		width: 100%;
		max-width: 100vw;
		margin: 0 auto;
		box-sizing: border-box;
		height: 81.3vh;
	}
	p {
		font-size: 1.5rem;
		width: 20rem;
		margin: auto;
	}
	p::after {
		animation: loader 1.5s normal ease infinite;
		content: '';
	}

	@keyframes bounce {
		from {
			transform: scaleX(1.25);
		}
		to {
			transform: translateY(-50px) scaleX(1);
		}
	}

	@keyframes loader {
		0% {
			content: '';
		}

		33% {
			content: ' .';
		}

		66% {
			content: ' ..';
		}

		100% {
			content: ' ...';
		}
	}
</style>
