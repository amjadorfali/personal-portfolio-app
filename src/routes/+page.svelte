<script lang="ts">
	import { links } from '$lib/config';

	const stack = [
		'React',
		'TypeScript',
		'Node.js',
		'Go',
		'PostgreSQL',
		'MongoDB',
		'Redis',
		'AWS Serverless',
		'Docker',
		'Kubernetes',
		'Terraform'
	];

	const experience = [
		{
			text: 'Led the facility operations platform revamp — 5x operations performance, 3x development speed, 20+ people across tech, design, and product.'
		},
		{
			text: 'Built Sorting Station V2 — greenfield AI-assisted garment sorting, running in production.'
		},
		{
			text: 'Eliminated ~1,630 errors/month through a sustained error-reduction campaign.'
		},
		{
			text: 'Cut API response times from 6 seconds to sub-second.'
		},
		{
			text: 'Migrated AWS Lambdas to Node.js 22; extracted microservices; owned CI/CD and incident response.'
		}
	];
</script>

<svelte:head>
	<title>Amjad Orfali — Senior Full-Stack / Platform Engineer</title>
	<meta
		name="description"
		content="Amjad Orfali — Senior Full-Stack / Platform Engineer. 6+ years building and operating production platforms: React/TypeScript frontends, Node.js backends, AWS serverless. Based in Beirut, open to relocation and remote."
	/>
</svelte:head>

<article class="w-full max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">
	<!-- Hero -->
	<section class="flex flex-col gap-6">
		<h1 class="h1">Amjad Orfali</h1>
		<p class="h3 text-primary-400">Senior Full-Stack / Platform Engineer</p>
		<p class="text-lg max-w-2xl">
			6+ years building and operating production platforms — React/TypeScript frontends, Node.js
			backends, AWS serverless infrastructure. Based in Beirut; open to relocation and remote
			work.
		</p>
		<nav class="flex flex-wrap gap-6 pt-2">
			<a
				href="/Amjad-Orfali-Resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
			>
				Resume (PDF)
			</a>
			<a
				href={links.linkedIn}
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
			>
				LinkedIn
			</a>
			<a
				href={links.github}
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
			>
				GitHub
			</a>
		</nav>
	</section>

	<!-- Experience -->
	<section class="flex flex-col gap-6">
		<h2 class="h2 uppercase">Experience</h2>
		<div class="flex flex-col gap-2">
			<h3 class="h4">Washmen — Senior Full-Stack Engineer</h3>
			<p class="opacity-75">6 years. Facility operations platform, customer app, and internal tooling.</p>
		</div>
		<ul class="list-disc list-outside pl-6 flex flex-col gap-3 marker:text-primary-400">
			{#each experience as item}
				<li class="pl-2">{item.text}</li>
			{/each}
			<li class="pl-2">
				Freelance: built a Go data-sync pipeline (ERP → warehouse, scheduled via PowerShell).
			</li>
		</ul>
	</section>

	<!-- Projects -->
	<section class="flex flex-col gap-6">
		<h2 class="h2 uppercase">Projects</h2>

		<div class="flex flex-col gap-2">
			<h3 class="h4">facility-ops-api — Go + Kubernetes (in progress)</h3>
			<p>
				Platform engineering demo: REST API in Go (chi), PostgreSQL, Redis, background workers,
				Docker, Kubernetes, Terraform, CI/CD, Prometheus/Grafana.
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<h3 class="h4">Wards — Remote Monitoring (RMM)</h3>
			<p>
				Open-source health-check monitoring tool, built from scratch — code, design, and product.
			</p>
			<a
				href={links.wardsDemo}
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4 w-fit"
			>
				View Demo
			</a>
		</div>
	</section>

	<!-- Stack -->
	<section class="flex flex-col gap-6">
		<h2 class="h2 uppercase">Stack</h2>
		<ul class="flex flex-wrap gap-3">
			{#each stack as tech}
				<li class="px-3 py-1 rounded-full border border-primary-400 text-sm">{tech}</li>
			{/each}
		</ul>
	</section>

	<!-- Contact -->
	<section class="flex flex-col gap-6">
		<h2 class="h2 uppercase">Contact</h2>
		<p>Best reached by email or LinkedIn.</p>
		<nav class="flex flex-wrap gap-6">
			<a
				href={links.email}
				class="font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
			>
				Email
			</a>
			<a
				href={links.linkedIn}
				target="_blank"
				rel="noopener noreferrer"
				class="font-bold text-primary-400 hover:text-primary-300 transition-colors underline underline-offset-4"
			>
				LinkedIn
			</a>
		</nav>
	</section>
</article>
