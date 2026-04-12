<script lang="ts">
	import '../app.css';
	import IntroductionSection from '$lib/components/homepage/introduction-section.svelte';
	import AboutSection from '$lib/components/homepage/about-section.svelte';
	import SkillsSection from '$lib/components/homepage/skills-section.svelte';
	import CoursesSection from '$lib/components/homepage/courses-section.svelte';
	import ExperiencesSection from '$lib/components/homepage/experiences-section.svelte';
	import RegistrationSection from '$lib/components/homepage/registration-section.svelte';
	import { t } from '$lib/i18n.svelte';
	import Seo from '$lib/components/seo.svelte';
</script>

<Seo />

<div class="relative">
	<IntroductionSection />

	<div class="relative space-y-0">
		<AboutSection />
		<!-- <SkillsSection /> -->
		<CoursesSection />
		<!-- <ExperiencesSection /> -->
		<RegistrationSection />
	</div>
</div>
