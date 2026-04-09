<script lang="ts">
	import { slide } from 'svelte/transition';
	import PageTitle from '../page-title.svelte';
	import AnimateOnScroll from '../animate-on-scroll.svelte';
	import Icon from '@iconify/svelte';

	const experiences = [
		{
			id: 1,
			role: 'Senior Mathematics Tutor',
			institution: "Mathera Tutoring Practice",
			period: 'Jan 2022 to Present',
			type: 'Full-time',
			description:
				'Running an independent tutoring practice serving high school and university students. Developed customized curricula for 50+ students, achieving a 98% exam pass rate. Specializing in calculus, algebra, and SAT math preparation.',
			highlights: ['200+ sessions delivered', '98% pass rate', 'Curriculum development', 'SAT coaching']
		},
		{
			id: 2,
			role: 'Mathematics Teaching Assistant',
			institution: 'State University, Department of Mathematics',
			period: 'Aug 2020 to Dec 2021',
			type: 'Part-time',
			description:
				'Assisted professors in teaching Calculus I & II and Linear Algebra to undergraduate students. Facilitated weekly tutorial sessions, graded assignments, and provided one-on-one support during office hours.',
			highlights: ['Calculus I & II', 'Linear Algebra', '120+ students assisted', 'Tutorial facilitation']
		},
		{
			id: 3,
			role: 'Math Olympiad Coach',
			institution: 'Sunrise High School',
			period: 'Mar 2019 to Jul 2020',
			type: 'Contract',
			description:
				"Coached the school's Math Olympiad team. Designed challenging problem sets, ran weekly practice sessions, and mentored students through regional and national competitions. Team placed 2nd nationally.",
			highlights: ['Olympiad preparation', 'Problem set design', '2nd place nationally', 'Team mentorship']
		},
		{
			id: 4,
			role: 'Online Math Tutor',
			institution: 'Freelance via Multiple Platforms',
			period: 'Jan 2018 to Feb 2019',
			type: 'Freelance',
			description:
				'Provided online mathematics tutoring to students across different countries and curricula (IB, Cambridge A-Level, US AP Math). Adapted teaching methods for asynchronous and synchronous online learning.',
			highlights: ['IB Mathematics', 'Cambridge A-Level', 'AP Calculus', 'Online teaching']
		}
	];

	let activeIndex = $state(0);

	function toggle(index: number) {
		activeIndex = index === activeIndex ? -1 : index;
	}

	const typeColors: Record<string, string> = {
		'Full-time': 'var(--purple)',
		'Part-time': 'var(--success)',
		'Contract': 'var(--warning)',
		'Freelance': 'var(--muted-foreground)'
	};
</script>

<section class="section-padding relative overflow-hidden" id="experiences" aria-labelledby="experiences-title">
	<div class="container-modern relative z-10">
		<PageTitle
			title="Teaching Journey"
			brief="My experience"
			description="A timeline of my growth as an educator and mathematician"
		/>

		<div class="relative">
	

			<div class="space-y-6">
				{#each experiences as exp, i (exp.id)}
					<AnimateOnScroll
						animation="stagger"
						delay={i * 100}
						threshold={0.1}
						rootMargin="0px 0px -10% 0px"
					>
						<div
							class="card-modern relative cursor-pointer overflow-hidden !p-0 transition-all duration-300"
							class:border-primary={activeIndex === i}
							onclick={() => toggle(i)}
							onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggle(i); }}
							role="button"
							tabindex={i}
							aria-expanded={activeIndex === i}
						>
							<div
								class="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
								style="background: {typeColors[exp.type] ?? 'var(--border)'}; {activeIndex === i ? 'width: 4px;' : ''}"
							></div>

							<div class="flex items-start justify-between p-6 pl-8">
								<div class="flex-1">
									<div class="mb-2 flex flex-wrap items-center gap-2">
										<span
											class="rounded-full px-2.5 py-0.5 text-xs font-semibold"
											style="background: oklch(from {typeColors[exp.type] ?? 'var(--muted)'} l c h / 0.12); color: {typeColors[exp.type] ?? 'var(--muted-foreground)'};"
										>
											{exp.type}
										</span>
										<span class="text-muted-foreground text-xs">{exp.period}</span>
									</div>
									<h3
										class="text-base font-bold transition-colors duration-300 md:text-lg"
										class:text-primary={activeIndex === i}
									>
										{exp.role}
									</h3>
									<p class="text-muted-foreground mt-0.5 text-sm">{exp.institution}</p>
								</div>
								<div class="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300"
									style="background: oklch(from var(--primary) l c h / 0.1);"
								>
									<Icon 
										icon="lucide:chevron-down" 
										class="h-5 w-5 transition-transform duration-300 {activeIndex === i ? 'rotate-180' : ''}" 
										style="color: var(--primary);" 
									/>
								</div>
							</div>

							{#if activeIndex === i}
								<div transition:slide={{ duration: 250 }} class="border-border/50 border-t px-8 pb-6 pt-4">
									<p class="text-muted-foreground mb-4 text-sm leading-relaxed">{exp.description}</p>
									<div class="flex flex-wrap gap-2">
										{#each exp.highlights as h}
											<span
												class="rounded-lg px-2.5 py-1 text-xs font-medium"
												style="background: oklch(from var(--primary) l c h / 0.1); color: var(--primary);"
											>
												{h}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</AnimateOnScroll>
				{/each}
			</div>
		</div>
	</div>
</section>
