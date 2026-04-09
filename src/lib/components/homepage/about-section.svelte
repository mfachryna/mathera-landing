<script>
	import AnimateOnScroll from '$lib/components/animate-on-scroll.svelte';
	import PageTitle from '../page-title.svelte';
	import Icon from '@iconify/svelte';

	const aboutCards = [
		{
			title: 'The Explainer',
			icon: 'lucide:lightbulb',
			description:
				"Complex mathematics becomes crystal clear through my step-by-step approach. I break down intimidating formulas into simple, logical steps, making sure you truly understand the 'why', not just memorize the 'how'."
		},
		{
			title: 'The Coach',
			icon: 'lucide:target',
			description:
				'Every student learns differently. I adapt my teaching pace, style, and methods to match how you think. Whether you need visual explanations, practice drills, or conceptual deep-dives, I meet you where you are.'
		},
		{
			title: 'The Problem Solver',
			icon: 'lucide:trophy',
			description:
				'From homework struggles to high-stakes exams, I give you the tools and strategies to tackle any problem with confidence. Real exam prep, timed practice, and systematic problem-solving techniques included.'
		}
	];

	const badges = [
		{ icon: 'lucide:ruler', label: 'Structured Teaching' },
		{ icon: 'lucide:calculator', label: 'Concept-First Approach' },
		{ icon: 'lucide:crosshair', label: 'Exam-Ready Focus' },
		{ icon: 'lucide:message-circle', label: 'Patient & Supportive' },
		{ icon: 'lucide:refresh-cw', label: 'Adaptive Methods' }
	];
</script>

<section class="section-padding relative overflow-hidden" id="about" aria-labelledby="about-title">
	<div class="container-modern relative z-10">
		<PageTitle title="About Me" brief="Get to know your tutor" />

		<div class="relative grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
			{#each aboutCards as card, i (card.title)}
				<AnimateOnScroll
					animation="bounce"
					delay={i * 150}
					threshold={0.1}
					className="w-full"
				>
					<article
						class="group card-modern hover-lift bg-background/60 relative h-full overflow-hidden !p-0 backdrop-blur-md"
						aria-labelledby={`about-card-${i}`}
					>
						<div
							class="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							style="background: linear-gradient(135deg, oklch(from var(--primary) l c h / 0.05), oklch(from var(--accent) l c h / 0.05));"
						></div>


						<div class="relative z-10 flex h-full flex-col p-8">
							<div class="mb-5">
								<div
									class="inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
									style="background: var(--gradient-primary); color: var(--primary-foreground);"
								>
									<Icon icon={card.icon} class="h-6 w-6" />
								</div>
							</div>

							<h3
								id={`about-card-${i}`}
								class="group-hover:text-primary mb-4 text-lg font-bold transition-colors duration-300"
							>
								{card.title}
							</h3>

							<p class="text-muted-foreground group-hover:text-foreground flex-1 text-sm leading-relaxed transition-colors duration-300">
								{card.description}
							</p>

							<div
								class="mt-6 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-16"
								style="background: var(--gradient-primary);"
							></div>
						</div>
					</article>
				</AnimateOnScroll>
			{/each}
		</div>

		<div class="mt-20 text-center">
			<AnimateOnScroll animation="fade" delay={500}>
				<div class="mx-auto max-w-3xl">
					<p class="text-muted-foreground mb-8 text-base leading-relaxed lg:text-lg">
						I believe that every student has mathematical potential waiting to be unlocked.
						My goal is not just to get you through the next exam, it's to build genuine
						mathematical intuition that will serve you for life.
					</p>
					<div class="flex flex-wrap justify-center gap-3">
						{#each badges as badge}
							<div class="badge-modern">
								<Icon icon={badge.icon} class="mr-1.5 h-4 w-4" />
								{badge.label}
							</div>
						{/each}
					</div>
				</div>
			</AnimateOnScroll>
		</div>
	</div>
</section>
