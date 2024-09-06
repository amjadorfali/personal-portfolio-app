<script lang="ts">
	import { Link } from '$lib/components';
	import { keyedRoutes, links } from '$lib/config';
	import MyImage from '$lib/assets/hero.png?w=2560&h=1440&format=webp&imagetools';
	import { fly } from 'svelte/transition';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Amjad Orfali - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Welcome to Amjad Orfali's portfolio website! Amjad is a skilled frontend web developer and software engineer with years of experience in the field. Discover his technical expertise and commitment to quality in creating responsive and visually appealing websites and user-friendly interfaces for web applications. Explore his past projects and let's discuss how he can help you achieve your business goals through efficient and effective web development solutions."
	/>
</svelte:head>
<article
	class=" text-center text-balance lg:text-start items-center py-8 px-4 align-middle h-full min-h-[70vh] lg:min-h-[81.3vh] gap-20 lg:items-end xl:max-w-[75rem]"
>
	<h1 class="h1">
		<!-- Hi, I’m Amjad. I build client and server-side applications, -->
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa minus doloremque
	</h1>

	<div class="flex justify-center flex-wrap lg:flex-nowrap gap-20">
		<img
			src={MyImage}
			srcset=""
			alt="Me"
			class="lg:order-1 lg:basis-1/2 /3 hero h-full lg:h-full lg:w-full lg:min-h-[9rem] lg:max-h-[25rem]"
		/>

		<section class=" flex lg:basis-1/2 flex-col gap-4 card p-4 basis-full">
			<h2 class="h2 uppercase card-header">About</h2>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, consequuntur velit iste
				maiores similique tenetur, voluptate, neque facilis atque odit perferendis magnam reiciendis
				inventore provident sed ab recusandae harum maxime.
			</p>

			<Link
				target="_blank"
				text="↓ Resume"
				href="https://drive.google.com/file/d/19ukhdVYAM6QU9F-eJf5qz0K_qCfjYBBm/view?usp=share_link"
				className="w-fit self-center lg:self-start "
			/>
		</section>
	</div>

	<section class="flex flex-col gap-14 card p-4">
		<h2 class="h2 uppercase card-header">Works</h2>

		<h3 class="h3 py-4">[Washmen]</h3>

		<div class="flex flex-col xl:flex-row xl:flex-wrap gap-20">
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar src={MyImage} background="bg-surface-900-50-token p-[0.35rem]" />

				<caption class=" basis-full lg:basis-0 text-nowrap">Facility App V2</caption>
				<p class=" p-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum quisquam esse nihil
					est, laboriosam reprehenderit, distinctio debitis deleniti magni quidem at tempora.
					Similique odio maxime vero sapiente est quod?
				</p>
				<Link
					underline={false}
					href={links.email}
					className=" font-bold !text-white rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 active:scale-95   transition-all duration-200  p-3"
					text="Visit Website"
				/>
			</section>

			<!-- Facility -->

			<section
				class="flex basis-full items-center gap-4 justify-center lg:justify-start xl:basis-[44%] flex-wrap"
			>
				<Avatar src={MyImage} background="bg-surface-900-50-token p-[0.35rem]" />

				<caption class="basis-full lg:basis-0 text-nowrap">Facility App</caption>
				<p class=" p-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum quisquam esse nihil
					est, laboriosam reprehenderit, distinctio debitis deleniti magni quidem at tempora.
					Similique odio maxime vero sapiente est quod?
				</p>
				<Link
					underline={false}
					href={links.email}
					className=" font-bold !text-white rounded-tr-lg rounded-bl-lg  bg-primary-500 hover:bg-primary-500/50 active:scale-95  transition-all duration-200 p-3"
					text="Visit Website"
				/>
			</section>

			<!-- Customer APP -->
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar src={MyImage} background="bg-surface-900-50-token p-[0.35rem]" />

				<caption class=" basis-full lg:basis-0 text-nowrap">Customer App</caption>
				<p class=" p-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum quisquam esse nihil
					est, laboriosam reprehenderit, distinctio debitis deleniti magni quidem at tempora.
					Similique odio maxime vero sapiente est quod?
				</p>
				<Link
					underline={false}
					href={links.email}
					className=" font-bold !text-white rounded-tr-lg rounded-bl-lg  bg-primary-500 hover:bg-primary-500/50 active:scale-95  transition-all duration-200 p-3"
					text="Visit Website"
				/>
			</section>
		</div>
		<!-- Facility v2 -->
		<h3 class="h3 py-4">[Wards]</h3>
		<div class="flex flex-col xl:flex-row xl:flex-wrap gap-20">
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar src={MyImage} background=" bg-surface-900-50-token p-[0.35rem]" />
				<br />
				<caption class="basis-full lg:basis-0 text-nowrap">System Monitoring</caption>
				<p class=" p-3">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eum quisquam esse nihil
					est, laboriosam reprehenderit, distinctio debitis deleniti magni quidem at tempora.
					Similique odio maxime vero sapiente est quod?
				</p>
				<Link
					underline={false}
					href={links.email}
					className=" font-bold !text-white rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 active:scale-95  transition-all duration-200 p-3"
					text="Visit Website"
				/>
			</section>
		</div>
	</section>
</article>

<!-- FLIP BOX -->

<!-- <script>
	import { vocab } from './vocabData.js';
	
	import Flashcard from './Flashcard.svelte';
	
	let flashcardIndex = 0;
	$: clue = vocab[flashcardIndex].image;
	$: answer = vocab[flashcardIndex].word;
	
	let showCardBack = false;	
	const toggleShowBack = () => showCardBack = !showCardBack;
	
	const prevCard = () => {
		showCardBack = false;
		if (flashcardIndex === 0) {
			flashcardIndex = vocab.length-1;
		} else {
			flashcardIndex -= 1;
		}
	}
	
	const nextCard = () => {
		showCardBack = false;
		if (flashcardIndex === vocab.length-1) {
			flashcardIndex = 0;
		} else {
			flashcardIndex += 1;
		}	 
	}
</script>-->

<!-- <main>
	FLASHCARD COMMENT OUT
	<div class="flip-box">
		<div class="flip-box-inner" class:flip-it={showCardBack}>
			<Flashcard {clue} 
								 {answer} 
								 {showCardBack} 
								 />
		</div>
	</div>

	BUTTONS  COMMENT OUT
	<div id="btn-cont">
		<button class="arrow-btn" on:click={prevCard}>&#8592;</button>
		
		<button on:click={toggleShowBack}>
			{showCardBack ? "Hide Answer" : "Show Answer"}
		</button>
		
		<button class="arrow-btn" on:click={nextCard}>&#8594;</button>
	</div>
</main>	 -->

<!-- <style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 15%;
		height: 100vh;
	}
	
	/* The flip box container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
	.flip-box {
		background-color: transparent;
		width: 400px;
		height: 300px;
/* 		border: 1px solid #ddd; */
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.4s;
		transform-style: preserve-3d;
	}

	/* Do an horizontal flip on button click */
	.flip-it {
		transform: rotateY(180deg);
	}
	
	#btn-cont {
		width: 200px;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
	}

	button {
		background-color: 	hsl(65, 6%, 40%);
		padding: 10px 10px;
		color: white;
		cursor: pointer;
	}
	
	button:active {
		background-color: hsl(50, 65%, 25%);
	}
</style> -->

<style>
	article {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	img.hero {
		color: transparent;
		border-radius: 1.5rem;
		-o-object-position: 50% 100%;
		object-position: 50% 100%;
		-o-object-fit: cover;
		object-fit: cover;
	}
</style>
