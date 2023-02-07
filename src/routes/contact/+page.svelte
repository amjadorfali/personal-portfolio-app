<script lang="ts">
	//eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-nocheck
	export const prerender = true;
</script>

<article class="flex  items-center justify-center align-middle wrapper">
	<form name="contact" netlify method="POST">
		<input type="hidden" name="form-name" value="contact" />
		<p>
			<label>Your Name: <input type="text" name="name" /></label>
		</p>
		<p>
			<label>Your Email: <input type="email" name="email" /></label>
		</p>
		<p>
			<label
				>Your Role: <select name="role[]" multiple>
					<option value="leader">Leader</option>
					<option value="follower">Follower</option>
				</select></label
			>
		</p>
		<p>
			<label>Message: <textarea name="message" /></label>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
	</form>
</article>

<style>
	section {
		width: 100%;
	}
	.wrapper {
		width: 100%;
		max-width: 85vw;
		margin: 0 auto;
		box-sizing: border-box;
		min-height: 100vh;
	}

	h1 {
		text-align: center;
	}

	h1 {
		font-size: 1.5rem;
	}

	@media (max-width: 768px) {
		.wrapper {
			margin: 2.5rem;
		}
		h1 {
			text-align: start;
		}

		h1 {
			font-size: 1rem;
		}
	}
</style>
