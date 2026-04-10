<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import AnimateOnScroll from '$lib/components/animate-on-scroll.svelte';
	import PageTitle from '../page-title.svelte';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n.svelte';

	let skills = $derived([
		{ name: t('skills.topics')[0] || 'Algebra', symbol: 'x²', level: t('skills.levels.expert') || 'Expert', pct: 98, color: 'var(--purple)', desc: t('skills.descs.algebra') || 'Linear, quadratic, polynomial and abstract algebra' },
		{ name: t('skills.topics')[2] || 'Calculus', symbol: '∫', level: t('skills.levels.expert') || 'Expert', pct: 95, color: 'var(--purple-light)', desc: t('skills.descs.calculus') || 'Differential, integral and multivariable calculus' },
		{ name: t('skills.topics')[1] || 'Geometry', symbol: 'Δ', level: t('skills.levels.advanced') || 'Advanced', pct: 92, color: 'var(--warning)', desc: t('skills.descs.geometry') || 'Euclidean, coordinate and analytical geometry' },
		{ name: t('skills.topics')[3] || 'Statistics', symbol: 'σ', level: t('skills.levels.advanced') || 'Advanced', pct: 90, color: 'var(--success)', desc: t('skills.descs.statistics') || 'Probability, distributions and statistical analysis' },
		{ name: t('skills.topics')[4] || 'Trigonometry', symbol: 'θ', level: t('skills.levels.expert') || 'Expert', pct: 96, color: 'var(--purple)', desc: t('skills.descs.trigonometry') || 'Trigonometric functions, identities and equations' },
		{ name: t('skills.linearAlgebra') || 'Linear Algebra', symbol: 'λ', level: t('skills.levels.advanced') || 'Advanced', pct: 88, color: 'var(--accent)', desc: t('skills.descs.linearAlgebra') || 'Matrices, vectors and linear transformations' },
	]);

	let barWidths: number[] = $state(skills.map(() => 0));
	let mounted = false;

	onMount(() => {
		mounted = true;
		if (!browser) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setTimeout(() => {
					skills.forEach((skill, i) => {
						setTimeout(() => {
							barWidths[i] = skill.pct;
						}, i * 120);
					});
				}, 200);
				observer.disconnect();
			}
		}, { threshold: 0.2 });
		const section = document.getElementById('skills');
		if (section) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<section class="section-padding relative overflow-hidden" id="skills" aria-labelledby="skills-title">
	<div class="container-modern relative z-10">
		<PageTitle title={t('skills.title')} brief={t('skills.brief')} />

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each skills as skill, i}
				<AnimateOnScroll animation="bounce" delay={i * 100} threshold={0.1}>
					<div class="group card-modern hover-lift relative overflow-hidden flex flex-col h-full !p-6">
						<div
							class="absolute top-0 left-0 h-full w-1 rounded-r-full transition-all duration-300 group-hover:w-1.5"
							style="background: {skill.color};"
						></div>

						<div class="flex-1 flex items-start justify-between mb-4">
							<div>
								<div class="badge-gold mb-2">{skill.level}</div>
								<h3
									class="text-lg font-bold transition-colors duration-300 group-hover:text-primary"
							>
								{skill.name}
								</h3>
								<p class="text-muted-foreground mt-1 text-xs leading-relaxed">{skill.desc}</p>
							</div>
							<div
								class="ml-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-serif font-bold"
								style="background: oklch(from {skill.color} l c h / 0.12); color: {skill.color};"
							>
								{skill.symbol}
							</div>
						</div>

						<div class="mt-4">
							<div class="mb-1.5 flex justify-between text-xs">
								<span class="text-muted-foreground">{t('skills.proficiency') || 'Proficiency'}</span>
								<span class="font-semibold" style="color: {skill.color};">{skill.pct}%</span>
							</div>
							<div class="progress-modern">
								<div
									class="progress-fill"
									style="width: {barWidths[i]}%; background: linear-gradient(90deg, {skill.color}, oklch(from {skill.color} calc(l + 0.1) c h));"
								></div>
							</div>
						</div>
					</div>
				</AnimateOnScroll>
			{/each}
		</div>

		<AnimateOnScroll animation="fade" delay={700} threshold={0.1}>
			<div class="mt-16 text-center">
				<p class="text-muted-foreground text-sm">
					{t('skills.alsoComfortable') || 'Also comfortable with: Discrete Mathematics, Number Theory, Mathematical Logic, SAT/ACT Math Prep'}
				</p>
			</div>
		</AnimateOnScroll>
	</div>
</section>
