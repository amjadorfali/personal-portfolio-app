<article class="flex gap-4 flex-1 p-4 w-full max-w-[100vw] my-0 mx-auto h-[81.3vh] box-border items-center justify-center">
	<span class="font-bold text-4xl min-w-[10.5rem]">Loading{' '}</span>
</article>

<style>
	span::after {
		animation: loader 1s normal ease infinite;
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
