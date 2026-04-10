<script lang="ts">
	import { slide } from 'svelte/transition';
	import PageTitle from '../page-title.svelte';
	import AnimateOnScroll from '../animate-on-scroll.svelte';
	import Icon from '@iconify/svelte';
	import { t } from '$lib/i18n.svelte';

	let experiences = $derived([
		{
			id: 1,
			role: t('experience.e1.role'),
			institution: t('experience.e1.institution'),
			period: t('experience.e1.period'),
			type: t('experience.types.fullTime'),
			typeKey: 'Full-time',
			description: t('experience.e1.desc'),
			highlights: t('experience.e1.highlights') as string[]
		},
		{
			id: 2,
			role: t('experience.e2.role'),
			institution: t('experience.e2.institution'),
			period: t('experience.e2.period'),
			type: t('experience.types.partTime'),
			typeKey: 'Part-time',
			description: t('experience.e2.desc'),
			highlights: t('experience.e2.highlights') as string[]
		},
		{
			id: 3,
			role: t('experience.e3.role'),
			institution: t('experience.e3.institution'),
			period: t('experience.e3.period'),
			type: t('experience.types.contract'),
			typeKey: 'Contract',
			description: t('experience.e3.desc'),
			highlights: t('experience.e3.highlights') as string[]
		},
		{
			id: 4,
			role: t('experience.e4.role'),
			institution: t('experience.e4.institution'),
			period: t('experience.e4.period'),
			type: t('experience.types.freelance'),
			typeKey: 'Freelance',
			description: t('experience.e4.desc'),
			highlights: t('experience.e4.highlights') as string[]
		}
	]);

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
			title={t('experience.title')}
			brief={t('experience.brief')}
			description={t('experience.subtitle')}
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
								style="background: {typeColors[exp.typeKey] ?? 'var(--border)'}; {activeIndex === i ? 'width: 4px;' : ''}"
							></div>

							<div class="flex items-start justify-between p-6 pl-8">
								<div class="flex-1">
									<div class="mb-2 flex flex-wrap items-center gap-2">
										<span
											class="rounded-full px-2.5 py-0.5 text-xs font-semibold"
											style="background: oklch(from {typeColors[exp.typeKey] ?? 'var(--muted)'} l c h / 0.12); color: {typeColors[exp.typeKey] ?? 'var(--muted-foreground)'};"
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
