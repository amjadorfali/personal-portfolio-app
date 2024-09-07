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
	<title>Amjad Orfali - Frontend Web Developer and Software Engineer</title>
	<meta
		name="description"
		content="Welcome to Amjad Orfali's portfolio website! Amjad is a skilled frontend web developer and software engineer with years of experience in the field. Discover his technical expertise and commitment to quality in creating responsive and visually appealing websites and user-friendly interfaces for web applications. Explore his past projects and let's discuss how he can help you achieve your business goals through efficient and effective web development solutions."
	/>
</svelte:head>
<article
	class=" text-center text-balance lg:text-start items-center py-8 px-4 align-middle h-full min-h-[70vh] lg:min-h-[81.3vh] gap-20 lg:items-end xl:max-w-[75rem]"
>
	<h1 class="h1 self-center">
		I build things;
		<span class="glitch inline-block" data-text="I break things">I break things</span>
	</h1>

	<div class="flex justify-center lg:justify-between items-stretch flex-wrap lg:flex-nowrap gap-20">
		<img src={MyImage} srcset="" alt="Me" class="lg:order-1 hero size-3/4 lg:h-auto lg:w-5/12" />

		<section class=" flex lg:basis-5/12 flex-col gap-4 card p-4 basis-full">
			<h2 class="h2 uppercase card-header">About</h2>

			<p>
				Hi, I’m Amjad 👋
				<br /><br /> Welcome to my portfolio! I’ve spent my career crafting robust, user-friendly
				software with a keen focus on quality and performance. My journey began with a fascination
				for computers and video games, which ignited my passion for coding.
				<br /><br />
				Over the years, this passion has evolved into a deep expertise in web development and a broad
				exploration of software engineering. I’m dedicated to solving real-world problems and delivering
				effective solutions from concept to execution. Let’s build something amazing together!
				<br /><br /> Oh and I use Vim btw.
			</p>

			<Link
				target="_blank"
				text="↓ Resume"
				href="https://drive.google.com/file/d/19ukhdVYAM6QU9F-eJf5qz0K_qCfjYBBm/view?usp=share_link"
				className="w-fit self-center lg:self-start  "
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
				<Avatar background=" bg-surface-50 p-[0.35rem]">
					<FineryLogo />
				</Avatar>
				<caption class=" basis-full lg:basis-0 text-nowrap">Facility System</caption>
				<p class=" p-3">
					I led a complete overhaul of our services and client applications, tackling performance
					bottlenecks and integrating modern methodologies and technologies. The revamped Facility
					System is now a scalable, high-performance platform, optimized for speed and ease of
					development. By adopting Monorepos, trunk-based development, optimized CI/CD, and
					automated testing, we achieved a streamlined and efficient workflow, emphasizing
					simplicity and automation throughout our workflows.
				</p>
				<Link
					underline={false}
					href={links.finery}
					className=" min-w-32 font-bold !text-white rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 active:scale-95   transition-all duration-200  p-3"
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
					<WashmenLogo />
				</Avatar>
				<caption class="basis-full lg:basis-0 text-nowrap">Facility App</caption>
				<p class=" p-3">
					As the lead developer for a team of five, I spearheaded the creation and maintenance of
					our Facility App, a critical internal tool for managing and tracking laundry operations.
					This comprehensive web app empowers our team to efficiently handle orders, monitor
					inventory, and oversee customer requests in real-time. Its implementation has
					significantly streamlined our processes and enhanced overall operational efficiency.
				</p>
				<Link
					underline={false}
					href={links.washmen}
					target="_blank"
					rel="noopener noreferrer"
					className="min-w-32 font-bold !text-white rounded-tr-lg rounded-bl-lg  bg-primary-500 hover:bg-primary-500/50 active:scale-95  transition-all duration-200 p-3"
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
					Sick of local laundromat incompetence, in 2015 we launched Washmen, a digital laundry &
					dry cleaning service to put an end to laundry-related misery. Since then, our mission has
					been to replace the machines you have at home using state-of-the-art technology and user
					friendly app. We're an award-winning pioneer in our industry, well recognized for our
					quality, consistency and convenience.
				</p>
				<Link
					underline={false}
					href={links.customerApp}
					className=" min-w-32 font-bold !text-white rounded-tr-lg rounded-bl-lg  bg-primary-500 hover:bg-primary-500/50 active:scale-95  transition-all duration-200 p-3"
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
			<section
				class="flex basis-full justify-center lg:justify-start items-center gap-4 xl:basis-[44%] flex-wrap"
			>
				<Avatar background=" bg-surface-50 p-[0.35rem]">
					<WardsLogo className="fill-secondary-700" />
				</Avatar>
				<br />
				<caption class="basis-full lg:basis-0 text-nowrap">System Monitoring</caption>
				<p class=" p-3">
					Wards is an advanced Remote Monitoring and Management (RMM) tool designed specifically for
					health checks. It provides comprehensive monitoring, real-time alerts, and detailed
					reports on system health, ensuring your IT infrastructure remains in optimal condition.
					With Wards, you can efficiently manage and maintain the performance and reliability of
					your systems through proactive health checks and actionable insights.
				</p>
				<Link
					underline={false}
					href={links.wardsDemo}
					className=" min-w-32 font-bold !text-white rounded-tr-lg rounded-bl-lg bg-primary-500 hover:bg-primary-500/50 active:scale-95  transition-all duration-200 p-3"
					text="Visit Website"
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
