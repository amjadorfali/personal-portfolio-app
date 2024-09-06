<script>
	export let clue;
	export let answer;
	export let showCardBack;
</script>

<div class="flip-box-front">
	<div id="image-cont">
		<img src={clue} alt={answer} />
	</div>
</div>

<div class="flip-box-back" class:conceal-answer={showCardBack}>
	<h2>{answer}</h2>
</div>

<style>
	/* Position the front and back side */
	.flip-box-front,
	.flip-box-back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
		box-shadow: -1px 1px 3px black;
	}

	/* Style the front side */
	.flip-box-front {
		background-color: #ddd;
		color: black;
		display: flex;
		justify-content: center;
	}

	@keyframes revealTextSlowly {
		to {
			color: white;
		}
	}

	.conceal-answer {
		animation: revealTextSlowly 0.3s forwards;
	}

	/* Style the back side */
	.flip-box-back {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #61592f;
		color: #61592f;
		/* 		color: white; */
		font-size: 1.3rem;
		transform: rotateY(180deg);
	}

	#image-cont {
		background-color: hsl(50, 65%, 75%);
		max-width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		max-height: 80%;
	}
</style>
