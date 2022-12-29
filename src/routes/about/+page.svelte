<script lang="ts">
</script>

<article class="grid wrapper">
	<!-- <p>
		As a web developer and software engineer specializing in frontend development, I have a strong foundation in React and Typescript, as well as a
		passion for creating visually stunning and responsive websites. My expertise in animations and dedication to following best practices ensures that
		every project I work on is not only functional but also user-friendly and aesthetically pleasing. I pride myself on my ability to turn complex
		requirements into intuitive and engaging web experiences for users. Whether working on a small project or a large-scale application, I have the
		skills and experience to deliver high-quality results on time and within budget.
	</p> -->

	<section class=" flex flex-col">
		<caption class="opacity-50 uppercase">a few words about me</caption>

		<h1 class="font-bold">
			I'm Amjad Orfali, a web developer and software engineer with a focus on Front-End development. I am passionate about creating visually stunning
			and intuitive user experiences.
		</h1>
	</section>

	<section>
		<p class="italic">
			With a strong focus on best practices and design patterns, I take pride in delivering high-quality, scalable, and maintainable code.
		</p>
		<br />
		<p>
			With years of experience in the industry, I have developed a deep understanding of frontend technologies such as HTML, CSS, and JavaScript.
			Whether it's building responsive layouts, animating smooth transitions, or integrating with APIs and back-end systems, I have the skills and
			expertise to bring your project to life.
		</p>
	</section>

	<section class="flex justify-between items-stretch gap-6  self-center justify-self-center">
		<div class="max-w-md">
			<h3 class="font-light opacity-70 text-xl">Skills</h3>
			<span>Web development <em>/</em></span>
			<span>Software Development <em>/</em></span>
			<span>Full-stack Development <em>/</em></span>
			<span>Responsive layouts <em>/</em></span>
			<span>Animations <em>/</em></span>
			<span>Design Patterns <em>/</em></span>
			<span>Animations <em>/</em></span>
			<span>Automated Testing </span>
		</div>
		<div class="max-w-md">
			<h3 class="font-light opacity-70 text-xl">Technologies</h3>
			<span>React <em>/</em></span>
			<span>Svelte <em>/</em></span>
			<span>Material UI <em>/</em></span>
			<span>Typescript <em>/</em></span>
			<span>NestJS <em>/</em></span>
			<span>Tailwind CSS <em>/</em></span>
			<span>Node.JS <em>/</em></span>
			<span>Amazon Web Services <em>/</em></span>
			<span>GraphQL and REST <em>/</em></span>
			<span>OOP and FP </span>
		</div>
	</section>

	<section>
		<h5>
			You can check out my skills in details in my
			<a
				target="_blank"
				rel="noreferrer"
				class="text-secondary border-b-2"
				data-sveltekit-preload-data
				href={'https://www.linkedin.com/in/amjad-orfali'}
			>
				Linked-In</a
			>
			or
			<a
				target="_blank"
				rel="noreferrer"
				class="text-secondary border-b-2"
				data-sveltekit-preload-data
				href={'https://www.toptal.com/resume/amjad-orfali'}>Toptal</a
			>
			profiles.
		</h5>
	</section>

	<!-- <p>
		I have a strong foundation in computer science principles and a passion for staying up-to-date with the latest web development technologies and
		trends. I am able to work effectively as part of a team or individually, and pride myself on my ability to take on complex problems and deliver
		high-quality solutions in a timely manner.
	</p>
	<p>
		Whether it's building responsive single-page applications or integrating animations to enhance the user interface, I am confident in my ability to
		deliver top-notch results for any project.
	</p>

	<p>
		I am also a firm believer in the importance of accessibility and user-centered design. I strive to create inclusive and intuitive interfaces that
		are easy to use for all users, regardless of their device or ability level. Overall, my goal is to bring value to my clients and help them achieve
		their business objectives through innovative and effective web development solutions.
	</p> -->
</article>

<style>
	.wrapper {
		margin: 7rem;
		row-gap: 5rem;
	}

	h1,
	h5,
	p,
	caption {
		text-align: center;
	}

	h5 a {
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.wrapper {
			margin: 2.5rem;
		}
		h1,
		h5,
		p,
		caption {
			text-align: start;
		}

		h1 {
			font-size: 1.5rem;
		}
	}
</style>
