<script lang="ts">
	import AnimateOnScroll from '$lib/components/animate-on-scroll.svelte';
	import PageTitle from '../page-title.svelte';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n.svelte';

	let courses = $derived([
		{
			icon: 'lucide:briefcase',
			title: t('courses.c1.title') || 'Entrance Exam Coaching',
			level: t('courses.c1.level') || 'Entrance Exams',
			levelColor: 'var(--success)',

			price: t('courses.c1.price') || '€1990',
			description: Array.isArray(t('courses.c1.desc')) ? t('courses.c1.desc') : [],
			topics: Array.isArray(t('courses.c1.topics')) ? t('courses.c1.topics') : [],
			importantNotes: Array.isArray(t('courses.c1.importantNotes')) ? t('courses.c1.importantNotes') : []
		},
		{
			icon: 'lucide:function-square',
			title: t('courses.c2.title') || 'General Mathematics Tutoring',
			level: t('courses.c2.level') || 'All Levels',
			levelColor: 'var(--purple)',
			price: t('courses.c2.price') || 'from €50/h',
			description: Array.isArray(t('courses.c2.desc')) ? t('courses.c2.desc') : [],
			topics: Array.isArray(t('courses.c2.topics')) ? t('courses.c2.topics') : [],
			importantNotes: Array.isArray(t('courses.c2.importantNotes')) ? t('courses.c2.importantNotes') : []
		},
		{
			icon: 'lucide:graduation-cap',
			title: t('courses.c3.title') || 'Matriculation Exam Coaching',
			level: t('courses.c3.level') || 'High School',
			levelColor: 'var(--warning)',
			price: t('courses.c3.price') || 'from €1490',
			description: Array.isArray(t('courses.c3.desc')) ? t('courses.c3.desc') : [],
			topics: Array.isArray(t('courses.c3.topics')) ? t('courses.c3.topics') : [],
			importantNotes: Array.isArray(t('courses.c3.importantNotes')) ? t('courses.c3.importantNotes') : []
		},
		{
			icon: 'lucide:globe',
			title: t('courses.c4.title') || 'International Exam Prep',
			level: t('courses.c4.level') || 'Exam Prep',
			levelColor: 'var(--accent)',
			price: t('courses.c4.price') || 'from €1490',
			description: Array.isArray(t('courses.c4.desc')) ? t('courses.c4.desc') : [],
			topics: Array.isArray(t('courses.c4.topics')) ? t('courses.c4.topics') : [],
			importantNotes: Array.isArray(t('courses.c4.importantNotes')) ? t('courses.c4.importantNotes') : []
		}
	]);

	function smoothScrollTo(id: string) {
		const el = document.getElementById(id);
		if (el) {
			const rect = el.getBoundingClientRect();
			window.scrollTo({ top: rect.top + window.pageYOffset - 80, behavior: 'smooth' });
		}
	}
</script>

<section class="section-padding relative overflow-hidden" id="courses" aria-labelledby="courses-title">
	<div class="container-modern relative z-10">
		<PageTitle
			title={t('courses.title')}
			brief={t('courses.brief')}
			description={t('courses.desc')}
		/>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
			{#each courses as course, i}
				<AnimateOnScroll animation="bounce" delay={i * 120} threshold={0.1}>
					<article class="group card-modern hover-lift relative flex h-full flex-col overflow-hidden !p-0">
						<div class="relative overflow-hidden p-6 pb-4">
							<div
								class="absolute top-0 right-0 h-24 w-24 rounded-bl-3xl opacity-10"
								style="background: var(--gradient-primary);"
							></div>

							<div class="flex items-start justify-between">
								<div>
									<span
										class="inline-block rounded-full px-3 py-1 text-xs font-semibold"
										style="background: oklch(from {course.levelColor} l c h / 0.12); color: {course.levelColor}; border: 1px solid oklch(from {course.levelColor} l c h / 0.25);"
									>
										{course.level}
									</span>
									<h3
										class="mt-3 text-lg font-bold transition-colors duration-300 group-hover:text-primary"
								>
									{course.title}
									</h3>
								</div>
								<div
									class="ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold"
									style="background: var(--gradient-primary); color: var(--primary-foreground);"
								>
									<Icon icon={course.icon} class="h-6 w-6" />
								</div>
							</div>

							<div class="mt-4 space-y-3">
								{#each course.description as paragraph}
									<p class="text-muted-foreground text-sm leading-relaxed">{paragraph}</p>
								{/each}
							</div>
						</div>

						<div class="border-border/50 border-t px-6 py-4">
							<p class="text-foreground mb-3 text-sm font-bold">{t('courses.includesLabel') || 'Course includes:'}</p>
							<ul class="space-y-2">
								{#each course.topics as includeItem}
									<li class="flex items-start gap-2">
										<Icon icon="lucide:check-circle-2" class="mt-0.5 h-4 w-4 shrink-0 text-primary" />
										<span class="text-muted-foreground text-sm">{includeItem}</span>
									</li>
								{/each}
							</ul>
						</div>



						<div class="mt-auto px-6 pb-6 pt-4">
							<div class="mb-4 flex items-center md:items-start text-sm font-medium text-foreground">
								<span class="flex items-center gap-1.5">
									<svg class="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.64-2.25 1.64-1.74 0-2.33-.89-2.41-1.76H7.73c.12 1.86 1.51 2.96 3.17 3.3V19h2.36v-1.65c1.88-.34 2.85-1.51 2.85-3.04 0-2.4-1.99-3-3.8-3.45z"></path>
									</svg>
									{@html course.price}
								</span>
							</div>
							<button
								class="btn-outline w-full text-sm"
								onclick={() => smoothScrollTo('register')}
							>
								{t('footer.enrollNow') || 'Enroll Now'} →
							</button>
						</div>
					</article>
				</AnimateOnScroll>
			{/each}
		</div>

		<AnimateOnScroll animation="slide" delay={150} threshold={0.1}>
			<div class="mt-12 w-full rounded-3xl border border-secondary p-8 bg-muted/20 backdrop-blur-md">
				<p class="text-foreground mb-4 text-lg font-bold flex items-center gap-2">
					<Icon icon="lucide:info" class="h-5 w-5 text-accent" />
					{t('courses.notesLabel') || 'Important Notes:'}
				</p>
				
				<ul class="space-y-3 list-disc list-outside ml-5">
					{#each (Array.isArray(t('courses.globalNotes')) ? t('courses.globalNotes') : []) as note}
						<li class="text-muted-foreground text-sm leading-relaxed">{note}</li>
					{/each}
				</ul>
			</div>
		</AnimateOnScroll>
	</div>
</section>
