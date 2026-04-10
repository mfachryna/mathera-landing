<script lang="ts">
	import AnimateOnScroll from '$lib/components/animate-on-scroll.svelte';
	import PageTitle from '../page-title.svelte';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n.svelte';

	let courses = $derived([
		{
			icon: 'lucide:function-square',
			title: t('courses.c1.title') || 'Foundation Algebra',
			level: t('courses.c1.level') || 'Beginner',
			levelColor: 'var(--success)',
			duration: '8 ' + (t('courses.weeks') || 'weeks'),
			students: '45+',
			description: t('courses.c1.desc') || 'Build a rock-solid algebra foundation.',
			topics: t('courses.c1.topics') || ['Linear Equations', 'Polynomials', 'Factoring', 'Functions & Graphs']
		},
		{
			icon: 'lucide:trending-up',
			title: t('courses.c2.title') || 'Calculus Mastery',
			level: t('courses.c2.level') || 'Advanced',
			levelColor: 'var(--purple)',
			duration: '12 ' + (t('courses.weeks') || 'weeks'),
			students: '30+',
			description: t('courses.c2.desc') || 'Conquer calculus with deep conceptual understanding.',
			topics: t('courses.c2.topics') || ['Limits & Continuity', 'Derivatives', 'Integration', 'Applications']
		},
		{
			icon: 'lucide:shapes',
			title: t('courses.c3.title') || 'Geometry & Proofs',
			level: t('courses.c3.level') || 'Intermediate',
			levelColor: 'var(--warning)',
			duration: '10 ' + (t('courses.weeks') || 'weeks'),
			students: '28+',
			description: t('courses.c3.desc') || 'Develop spatial reasoning and rigorous proof-writing skills.',
			topics: t('courses.c3.topics') || ['Triangles & Circles', 'Coordinate Geometry', 'Trigonometry', 'Proofs']
		},
		{
			icon: 'lucide:bar-chart-3',
			title: t('courses.c4.title') || 'Statistics & Probability',
			level: t('courses.c4.level') || 'Intermediate',
			levelColor: 'var(--purple-light)',
			duration: '8 ' + (t('courses.weeks') || 'weeks'),
			students: '35+',
			description: t('courses.c4.desc') || 'Understand data, chance, and inference.',
			topics: t('courses.c4.topics') || ['Descriptive Stats', 'Probability', 'Distributions', 'Hypothesis Testing']
		},
		{
			icon: 'lucide:graduation-cap',
			title: t('courses.c5.title') || 'SAT / ACT Math Prep',
			level: t('courses.c5.level') || 'Exam Prep',
			levelColor: 'var(--accent)',
			duration: '6 ' + (t('courses.weeks') || 'weeks'),
			students: '60+',
			description: t('courses.c5.desc') || 'Targeted preparation for standardized tests.',
			topics: t('courses.c5.topics') || ['Heart of Algebra', 'Problem Solving', 'Data Analysis', 'Advanced Math']
		},
		{
			icon: 'lucide:table-properties',
			title: t('courses.c6.title') || 'Linear Algebra',
			level: t('courses.c6.level') || 'Advanced',
			levelColor: 'var(--purple)',
			duration: '10 ' + (t('courses.weeks') || 'weeks'),
			students: '18+',
			description: t('courses.c6.desc') || 'Master vectors, matrices, and eigenvalues.',
			topics: t('courses.c6.topics') || ['Vectors & Spaces', 'Matrix Operations', 'Eigenvalues', 'Applications']
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

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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

							<p class="text-muted-foreground mt-3 text-sm leading-relaxed">{course.description}</p>
						</div>

						<div class="border-border/50 border-t px-6 py-4">
							<p class="text-muted-foreground mb-2.5 text-xs font-semibold uppercase tracking-wider">{t('footer.topicsCovered') || 'Topics Covered'}</p>
							<div class="flex flex-wrap gap-2">
								{#each course.topics as topic}
									<span
										class="rounded-lg px-2.5 py-1 text-xs"
										style="background: var(--secondary); color: var(--secondary-foreground);"
									>
										{topic}
									</span>
								{/each}
							</div>
						</div>

						<div class="mt-auto px-6 pb-6 pt-4">
							<div class="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
								<span class="flex items-center gap-1">
									<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
									{course.duration}
								</span>
								<span class="flex items-center gap-1">
									<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
									</svg>
									{course.students} {t('courses.studentsLabel') || 'students'}
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
	</div>
</section>
