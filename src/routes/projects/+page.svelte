<svelte:head>
	<title>Amjad | Projects</title>
	<meta name="description" content="Projects from Amjad Orfali" />
</svelte:head>

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
