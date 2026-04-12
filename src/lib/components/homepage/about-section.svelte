<script lang="ts">
	import AnimateOnScroll from '$lib/components/animate-on-scroll.svelte';
	import PageTitle from '../page-title.svelte';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n.svelte';

	let generalParagraphs = $derived(t('about.general.paragraphs') as string[] || []);
	let educationParagraphs = $derived(t('about.education.paragraphs') as string[] || []);
	let experienceBullets = $derived(t('about.experience.bullets') as string[] || []);

	let badges = $derived([
		{ icon: 'lucide:ruler', label: t('about.badges.structured') || 'Structured Teaching' },
		{ icon: 'lucide:calculator', label: t('about.badges.conceptFirst') || 'Concept-First Approach' },
		{ icon: 'lucide:crosshair', label: t('about.badges.examReady') || 'Exam-Ready Focus' },
		{ icon: 'lucide:message-circle', label: t('about.badges.patient') || 'Patient & Supportive' },
		{ icon: 'lucide:refresh-cw', label: t('about.badges.adaptive') || 'Adaptive Methods' }
	]);
</script>

<section class="section-padding relative overflow-hidden" id="about" aria-labelledby="about-title">
	<div class="container-modern relative z-10">
		<PageTitle title={t('about.title')} brief={t('about.brief')} />

		<AnimateOnScroll animation="fade" delay={100} threshold={0.1}>
			<article class="card-modern !p-0 overflow-hidden bg-background/60 backdrop-blur-md">

				<!-- ═══ Section 1: General — Pic #1 + Greeting ═══ -->
				<div class="">
					<!-- Text -->
					<div class="p-8 md:p-10 flex flex-col justify-center">

						<p class="gradient-text text-2xl md:text-3xl font-bold mb-4 leading-tight">
							{t('about.general.greeting')}
						</p>

						<div class="space-y-4">
							{#each generalParagraphs as para}
								<p class="text-muted-foreground text-sm md:text-base leading-relaxed">{para}</p>
							{/each}
						</div>
					</div>
				</div>

				<!-- Divider -->
				<div class="mx-8 md:mx-10">
					<div class="h-px w-full" style="background: oklch(from var(--primary) l c h / 0.12);"></div>
				</div>

				<!-- ═══ Section 2: Education — Text + Pic #2 ═══ -->
				<div class="p-8 md:p-10">
					<div class="flex items-center gap-3 mb-6">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-primary/20"
							style="background: var(--gradient-primary); color: var(--primary-foreground);"
						>
							<Icon icon="lucide:graduation-cap" class="h-5 w-5" />
						</div>
						<h3 class="text-lg font-bold">{t('about.education.title')}</h3>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-8 items-start">
						<div class="space-y-4">
							{#each educationParagraphs as para}
								<p class="text-muted-foreground text-sm md:text-base leading-relaxed">{para}</p>
							{/each}
						</div>

						<!-- Pic #2 -->
						<div class="relative h-72 md:h-full min-h-[260px] overflow-hidden rounded-2xl bg-muted/20 shadow-sm">
							<img
								src="/images/aman_graduation.jpeg"
								alt="Aalto University"
								class="absolute inset-0 w-full h-full object-cover object-[center_25%] transition-transform duration-700 hover:scale-105"
							/>
						</div>
					</div>
				</div>

				<!-- Divider -->
				<div class="mx-8 md:mx-10">
					<div class="h-px w-full" style="background: oklch(from var(--primary) l c h / 0.12);"></div>
				</div>

				<!-- ═══ Section 3: Competition Experience ═══ -->
				<div class="p-8 md:p-10">
					<div class="flex items-center gap-3 mb-6">
						<div
							class="inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-primary/20"
							style="background: var(--gradient-primary); color: var(--primary-foreground);"
						>
							<Icon icon="lucide:trophy" class="h-5 w-5" />
						</div>
						<h3 class="text-lg font-bold">{t('about.experience.title')}</h3>
					</div>

					<div class="flex flex-col gap-8">
						<div>
							<p class="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
								{t('about.experience.intro')}
							</p>

							<ul class="space-y-2 mb-5 pl-1">
								{#each experienceBullets as bullet}
									<li class="flex items-start gap-3 text-sm md:text-base">
										<span class="mt-1.5 h-2 w-2 shrink-0 rounded-full" style="background: var(--gradient-primary);"></span>
										<span class="text-muted-foreground w-full">{@html bullet}</span>
									</li>
								{/each}
							</ul>

							<p class="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
								{t('about.experience.outro')}
							</p>
						</div>

						<!-- Pic #3: Competition -->
						<div class="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl bg-muted/20 shadow-sm border border-border/50 group">
							<img
								src="/images/avatar/competition.jpeg"
								alt="Aalto University Mathematics Competition Team"
								class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</div>
					</div>
				</div>

				<!-- Divider -->
				<div class="mx-8 md:mx-10">
					<div class="h-px w-full" style="background: oklch(from var(--primary) l c h / 0.12);"></div>
				</div>

			</article>
		</AnimateOnScroll>
	</div>
</section>
