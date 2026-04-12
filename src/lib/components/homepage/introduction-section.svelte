<script lang="ts">
	import { onMount, tick, untrack } from 'svelte';
	import { browser } from '$app/environment';
	import { t, i18n } from '$lib/i18n.svelte';

	let words: string[] = $state([]);
	let currentText = $state('');
	let sentenceIndex = $state(0);
	let charIndex = $state(0);
	let isDeleting = $state(false);
	let cursorVisible = $state(true);
	let isComponentMounted = $state(false);
	let generation = 0; // plain let — NOT $state, avoids read-write loop in $effect

	$effect(() => {
		// Declare reactive dependency on locale explicitly
		const locale = i18n.locale;
		const w = t('hero.words') as string[];

		// Use untrack so writing $state here doesn't re-trigger this effect
		untrack(() => {
			words = Array.isArray(w) ? w : [
				'Mathematical Mastery',
				'Algebraic Excellence',
				'Calculus Fluency',
				'True Understanding'
			];
			currentText = '';
			sentenceIndex = 0;
			charIndex = 0;
			isDeleting = false;
			generation++;
			if (isComponentMounted) {
				startTypewriter();
			}
		});
	});

	function startTypewriter() {
		const gen = generation;
		function step() {
			if (!isComponentMounted || generation !== gen) return;
			const sentence = words[sentenceIndex];
			if (!sentence) return;
			if (!isDeleting) {
				if (charIndex < sentence.length) {
					currentText = sentence.substring(0, ++charIndex);
					setTimeout(step, 55);
				} else {
					setTimeout(() => { if (generation === gen) { isDeleting = true; step(); } }, 1800);
				}
			} else {
				if (charIndex > 0) {
					currentText = sentence.substring(0, --charIndex);
					setTimeout(step, 40);
				} else {
					isDeleting = false;
					sentenceIndex = (sentenceIndex + 1) % words.length;
					setTimeout(step, 60);
				}
			}
		}
		step();
	}

	function blinkCursor() {
		if (!isComponentMounted) return;
		cursorVisible = !cursorVisible;
		setTimeout(blinkCursor, 530);
	}

	function smoothScrollTo(id: string) {
		if (!browser) return;
		const el = document.getElementById(id);
		if (el) {
			const rect = el.getBoundingClientRect();
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			window.scrollTo({ top: rect.top + scrollTop - 80, behavior: 'smooth' });
		}
	}

	onMount(() => {
		isComponentMounted = true;
		tick().then(() => {
			setTimeout(() => {
				startTypewriter();
				blinkCursor();
			}, 200);
		});
		return () => { isComponentMounted = false; };
	});

	let stats = $derived([
		{ value: '50+', label: t('stats.students') || 'Students Taught' },
		{ value: '10+', label: t('stats.experience') || 'Years Experience' }
	]);

	function countUp(node: HTMLElement, targetText: string) {
		if (!browser) return;
		const match = targetText.match(/^([0-9]+)(.*)$/);
		if (!match) return;

		const target = parseInt(match[1], 10);
		const suffix = match[2] || '';
		
		const duration = 2000;
		const fps = 60;
		const frameDuration = 1000 / fps;
		const totalFrames = Math.round(duration / frameDuration);
		let frame = 0;

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				const animate = () => {
					frame++;
					const progress = frame / totalFrames;
					const easeOutQuad = (t: number) => t * (2 - t);
					const current = Math.round(target * easeOutQuad(Math.min(progress, 1)));
					node.innerText = current + suffix;

					if (frame < totalFrames) {
						requestAnimationFrame(animate);
					}
				};
				requestAnimationFrame(animate);
				observer.disconnect();
			}
		}, { threshold: 0.1 });

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
			}
		};
	}
</script>

<svelte:head>
	<title>{t('about.title') || 'Mathera'} - {t('hero.title') || 'Math Tutor'}</title>
	<meta name="description" content={t('hero.subtitle') || "Expert mathematics tutoring by Mathera."} />
</svelte:head>

<section
	class="relative flex min-h-screen w-full flex-col overflow-hidden"
	id="index"
	aria-label="Introduction"
>
	<div
		class="container-modern w-full relative z-10 flex flex-1 flex-col items-center justify-start pt-24 md:pt-32 pb-4"
	>
		<div class="mx-auto w-full space-y-6 text-center">
			<div class="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
				style="border-color: oklch(from var(--primary) l c h / 0.25); background: oklch(from var(--primary) l c h / 0.07);"
			>
				<span class="h-2 w-2 animate-pulse rounded-full" style="background: var(--accent);"></span>
				<span class="text-sm font-medium" style="color: var(--accent);">{t('hero.accepting')}</span>
			</div>

			<!-- Tightly grouped title elements -->
			<div class="flex flex-col items-center justify-center space-y-2">
				<div>
					<span class="text-muted-foreground text-sm font-medium uppercase tracking-widest">
						{t('hero.welcome')}
					</span>
					<h1 class="mt-2 text-responsive-xl font-bold text-center w-full max-w-full">
						<span class="text-foreground leading-tight block mb-2">{t('hero.title') || 'Your Path to'}</span>
						<!-- Inline wrapper allows natural wrapping of text on mobile without breaking 100vw, while keeping cursor attached -->
						<div class="mt-2 min-h-[1.5em] w-full break-words">
							<span class="gradient-text leading-snug inline" style="-webkit-box-decoration-break: clone; box-decoration-break: clone;">
								{currentText}
							</span>
							<span
								class="ml-1 inline-block h-[0.75em] w-[4px] align-baseline"
								class:opacity-100={cursorVisible}
								class:opacity-0={!cursorVisible}
								style="background: var(--accent); position: relative; top: 0.1em;"
								aria-hidden="true"
							></span>
						</div>
					</h1>
				</div>

				<div class="flex justify-center pt-2 md:pt-4">
					<div class="h-px w-24 rounded-full" style="background: var(--gradient-primary);"></div>
				</div>
			</div>

			<div class="mx-auto w-full pt-4 space-y-4" style="min-height: 6em;">
				{#each (Array.isArray(t('hero.subtitle')) ? t('hero.subtitle') : []) as paragraph}
					<p class="text-muted-foreground text-base leading-relaxed sm:text-lg">
						{paragraph}
					</p>
				{/each}
			</div>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<button class="btn-modern group" onclick={() => smoothScrollTo('courses')}>
					<span class="flex items-center gap-2">
						<span>{t('nav.courses') || 'Explore Courses'}</span>
						<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
						</svg>
					</span>
				</button>
				<button class="btn-outline" onclick={() => smoothScrollTo('register')}>
					{t('nav.contact') || 'Register Now'}
				</button>
			</div>
		</div>

		<div class="mt-12 w-full max-w-2xl mx-auto">
			<div class="grid grid-cols-2 gap-4 sm:gap-6">
				{#each stats as stat, i}
					<div
						class="card-modern text-center !p-5"
						style="animation-delay: {i * 0.1}s;"
					>
						<div
							class="gradient-text text-3xl font-bold sm:text-4xl"
							use:countUp={stat.value}
						>
							{stat.value}
						</div>
						<div class="text-muted-foreground mt-1 text-xs sm:text-sm">{stat.label}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="relative z-10 flex justify-center pb-6">
		<button
			onclick={() => smoothScrollTo('about')}
			class="text-muted-foreground hover:text-foreground flex flex-col items-center gap-2 transition-colors duration-300"
			aria-label="Scroll to about section"
		>
			<span class="text-xs uppercase tracking-widest">{t('hero.scroll') || 'Scroll'}</span>
			<div class="flex h-8 w-5 items-start justify-center rounded-full border-2 py-1"
				style="border-color: var(--muted-foreground);">
				<div class="animate-bounce h-2 w-0.5 rounded-full" style="background: var(--primary);"></div>
			</div>
		</button>
	</div>
</section>
