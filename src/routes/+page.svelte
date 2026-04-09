<script lang="ts">
	import '../app.css';
	import IntroductionSection from '$lib/components/homepage/introduction-section.svelte';
	import AboutSection from '$lib/components/homepage/about-section.svelte';
	import SkillsSection from '$lib/components/homepage/skills-section.svelte';
	import CoursesSection from '$lib/components/homepage/courses-section.svelte';
	import ExperiencesSection from '$lib/components/homepage/experiences-section.svelte';
	import RegistrationSection from '$lib/components/homepage/registration-section.svelte';
</script>

<svelte:head>
	<title>Mathera - Expert Mathematics Tutoring</title>
	<meta
		name="description"
		content="Expert mathematics tutoring by Mathera. Algebra, Calculus, Geometry, Statistics and more. Personalized lessons for every level."
	/>
	<meta name="keywords" content="math tutor, algebra tutor, calculus tutor, geometry tutor, online math tutoring, SAT math prep, mathematics expert, learn math" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://mathera.user.placeholder/" />

	<!-- OpenGraph / Social Meta Tags -->
	<meta property="og:title" content="Mathera - Expert Mathematics Tutoring" />
	<meta property="og:description" content="Expert mathematics tutoring. Personalized lessons, proven results. From foundation algebra to advanced calculus." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mathera.user.placeholder/" />
	<meta property="og:image" content="https://mathera.user.placeholder/og-image.jpg" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mathera - Expert Mathematics Tutoring" />
	<meta name="twitter:description" content="Expert mathematics tutoring. Personalized lessons, proven results." />

	<!-- Structured SEO Data -->
	{@html `<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "EducationalOrganization",
			"name": "Mathera",
			"description": "Expert mathematics educator specializing in calculus, algebra, and advanced mathematics tutoring.",
			"url": "https://mathera.user.placeholder/",
			"knowsAbout": ["Calculus", "Algebra", "Geometry", "Statistics", "Linear Algebra"],
			"foundingDate": "2024"
		}
	` + '</' + 'script>'}
</svelte:head>

<div class="relative">
	<IntroductionSection />

	<div class="relative space-y-0">
		<AboutSection />
		<SkillsSection />
		<CoursesSection />
		<ExperiencesSection />
		<RegistrationSection />
	</div>
</div>
