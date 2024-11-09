<script lang="ts">
	import { Link } from '$lib/components';
	import { links } from '$lib/config';
	import MyImage from '$lib/assets/hero.png?w=2560&h=1440&format=webp&imagetools';
	import FineryLogo from '$lib/assets/finery-logo.svelte';
	import WashmenLogo from '$lib/assets/washmen-logo.svelte';
	import WashmenIcon from '$lib/assets/washmen.webp';
	import WardsLogo from '$lib/assets/wards-logo.svelte';

	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>Amjad Orfali - Software Engineer</title>
	<meta
		name="description"
		content="Welcome to my portfolio! I’m Amjad, a dedicated software engineer with extensive experience in crafting innovative solutions. Let’s connect and explore how my expertise can help bring your projects to life and achieve your goals."
	/>
</svelte:head>
<article
	class=" text-center text-balance lg:text-start items-center py-8 px-4 align-middle h-full min-h-[70vh] lg:min-h-[81.3vh] gap-20 lg:items-end xl:max-w-[75rem]"
>
	<h1 class="h1 self-center">
		I make things;
		<span class="glitch inline-block" data-text="I break things">I break things</span>
	</h1>

	<div class="flex justify-center lg:justify-between items-stretch flex-wrap lg:flex-nowrap gap-20">
		<img
			src={MyImage}
			alt="Me"
			class="lg:order-1 hero size-3/4 lg:h-auto lg:w-5/12 min-w-60 min-h-36"
		/>

		<section class=" flex lg:basis-5/12 flex-col gap-4 card p-4 basis-full">
			<h2 class="h2 uppercase card-header">About</h2>

			<p>
				Hi, I’m Amjad 👋 I spend my days crafting software with a focus on quality and performance.
				I approach every problem as a new challenge and am always eager to learn. Oh, and I use Vim,
				by the way.
			</p>

			<Link
				target="_blank"
				text="↓ Resume"
				href="https://drive.google.com/file/d/1J_anqRRFtht2mpxyswwBlZBLXtmSKGhY/view?usp=sharing"
				className="w-fit self-center lg:self-start  "
			/>
		</section>
	</div>

	<section class="flex flex-col gap-14 card p-4">
		<h2 class="h2 uppercase card-header">Works</h2>

		<h3 class="h3 py-4">[Washmen]</h3>

		<div class="flex flex-col xl:flex-row xl:flex-wrap gap-20">
			<caption>
				Washmen is a digital laundry service that offers a convenient and efficient way to handle
				laundry and dry cleaning.
			</caption>
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar background=" bg-surface-50 p-[0.35rem]">
					<FineryLogo className="size-12" />
				</Avatar>
				<caption class=" basis-full lg:basis-0 text-nowrap">Facility System</caption>
				<p class=" p-3">
					I led our internal business tools team to revamp our Facility System, a critical platform
					for managing our operations. The revamped project featured state-of-the-art technologies
					and methodologies and was carefully planned and designed with cross-team collaboration,
					involving over 20 people across various roles in tech, design, and product expertise. This
					revamp led to a 5x increase in business operations performance and a 3x improvement in
					software development speed.
				</p>
				<Link
					underline={false}
					href={links.finery}
					className=" min-w-32 font-bold  rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 !text-on-primary-token active:scale-95   transition-all duration-200  p-3"
					target="_blank"
					rel="noopener noreferrer"
					text="Visit Website"
				/>
			</section>

			<!-- Facility -->

			<section
				class="flex basis-full items-center gap-4 justify-center lg:justify-start xl:basis-[44%] flex-wrap"
			>
				<Avatar background=" bg-surface-50 p-[0.35rem]">
					<WashmenLogo className="size-12" />
				</Avatar>
				<caption class="basis-full lg:basis-0 text-nowrap">Facility App</caption>
				<p class=" p-3">
					Working within the internal business tools team, I was responsible for developing and
					maintaining our Facility App, a critical internal tool for managing and tracking laundry
					operations. I led the development of new features, enhancements, and bug fixes, ensuring
					the app was consistently up-to-date and running smoothly.
				</p>
				<Link
					underline={false}
					href={links.washmen}
					target="_blank"
					rel="noopener noreferrer"
					className=" min-w-32 font-bold  rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 !text-on-primary-token active:scale-95   transition-all duration-200  p-3"
					text="Visit Website"
				/>
			</section>

			<!-- Customer APP -->
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar src={WashmenIcon} background="bg-surface-50 " />

				<caption class=" basis-full lg:basis-0 text-nowrap">Customer App</caption>
				<p class=" p-3">
					I contributed to the development of the Washmen Customer App, a user-friendly mobile app.
					I handled cross-team collaboration, ensuring our business flow was implemented correctly
					and efficiently. I also worked on PWAs and other web technologies to improve the user
					experience.
				</p>
				<Link
					underline={false}
					href={links.customerApp}
					className=" min-w-32 font-bold  rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 !text-on-primary-token active:scale-95   transition-all duration-200  p-3"
					text="Get app"
					target="_blank"
					rel="noopener noreferrer"
					style="text-align-last: center;"
				/>
			</section>
		</div>
		<!-- Facility v2 -->
		<h3 class="h3 py-4">[Wards]</h3>
		<div class="flex flex-col xl:flex-row xl:flex-wrap gap-20">
			<caption
				>Wards is an advanced Remote Monitoring and Management (RMM) tool designed specifically for
				health checks.
			</caption>
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar background=" bg-surface-50 p-[0.35rem]">
					<WardsLogo className="fill-secondary-700 size-12" />
				</Avatar>
				<br />
				<caption class="basis-full lg:basis-0 text-nowrap">System Monitoring</caption>
				<p class=" p-3">
					I built Wards from scratch with the help of my friend. I contributed to all parts of the
					project, including code, design, and product management. The project is available on
					GitHub and it's a proof of concept only.
				</p>
				<Link
					underline={false}
					href={links.wardsDemo}
					className=" min-w-30 font-bold  rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 !text-on-primary-token active:scale-95   transition-all duration-200  p-3"
					text="View Demo"
					target="_blank"
					rel="noopener noreferrer"
				/>
			</section>
		</div>
	</section>
</article>

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

	.glitch {
		position: relative;
		font-weight: bold;
		color: #ffffff;
		letter-spacing: 3px;
		z-index: 1;
	}

	.glitch:before,
	.glitch:after {
		display: block;
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.8;
	}

	.glitch:before {
		animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
		color: #00ffff;
		z-index: -1;
	}

	.glitch:after {
		animation: glitch-it 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
		color: #ff00ff;
		z-index: -2;
	}

	@keyframes glitch-it {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 2px);
		}
		40% {
			transform: translate(-2px, -2px);
		}
		60% {
			transform: translate(2px, 2px);
		}
		80% {
			transform: translate(2px, -2px);
		}
		to {
			transform: translate(0);
		}
	}
</style>
