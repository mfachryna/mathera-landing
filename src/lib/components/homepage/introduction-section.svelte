<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { tick } from 'svelte';

	const texts = [
		'Mathematical Mastery',
		'Algebraic Excellence',
		'Calculus Fluency',
		'Geometric Intuition',
		'Statistical Confidence',
		'Acing Your Exams',
		'True Understanding'
	];

	let currentText = '';
	let sentenceIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let cursorVisible = true;
	let isComponentMounted = false;
	let animationsStarted = false;

	function typeWriter() {
		if (!isComponentMounted || !animationsStarted) return;
		const sentence = texts[sentenceIndex];
		if (!isDeleting) {
			if (charIndex < sentence.length) {
				currentText += sentence[charIndex++];
				setTimeout(typeWriter, 55);
			} else {
				setTimeout(() => { isDeleting = true; typeWriter(); }, 1800);
			}
		} else {
			if (charIndex > 0) {
				currentText = sentence.substring(0, --charIndex);
				setTimeout(typeWriter, 40);
			} else {
				isDeleting = false;
				sentenceIndex = (sentenceIndex + 1) % texts.length;
				setTimeout(typeWriter, 60);
			}
		}
	}

	function blinkCursor() {
		if (!isComponentMounted || !animationsStarted) return;
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
				animationsStarted = true;
				typeWriter();
				blinkCursor();
			}, 200);
		});
		return () => { isComponentMounted = false; };
	});

	const stats = [
		{ value: '200+', label: 'Students Taught' },
		{ value: '5+', label: 'Years Experience' },
		{ value: '98%', label: 'Pass Rate' },
		{ value: '6', label: 'Subjects Covered' }
	];
</script>

<svelte:head>
	<title>Mathera - Your Personal Math Tutor</title>
	<meta name="description" content="Expert mathematics tutoring by Mathera. From algebra to calculus, personalized lessons for every level." />
</svelte:head>

<section
	class="relative flex min-h-screen w-full flex-col overflow-hidden"
	id="index"
	aria-label="Introduction"
>
	<div
		class="container-modern w-full relative z-10 flex flex-1 flex-col items-center justify-start pt-24 md:pt-32 pb-4"
	>
		<div class="mx-auto w-full max-w-4xl space-y-6 text-center">
			<div class="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
				style="border-color: oklch(from var(--primary) l c h / 0.25); background: oklch(from var(--primary) l c h / 0.07);"
			>
				<span class="h-2 w-2 animate-pulse rounded-full" style="background: var(--accent);"></span>
				<span class="text-sm font-medium" style="color: var(--accent);">Now Accepting Students</span>
			</div>

			<!-- Tightly grouped title elements -->
			<div class="flex flex-col items-center justify-center space-y-2">
				<div>
					<span class="text-muted-foreground text-sm font-medium uppercase tracking-widest">
						Welcome to Mathera
					</span>
					<h1 class="mt-2 leading-tight text-responsive-xl font-bold">
						<span class="text-foreground">Your Path to</span><br />
						<span class="gradient-text relative block h-[2.8em] md:h-[1.5em] w-full">
							{currentText}
							<span
								class="ml-1 inline-block h-[0.85em] w-[4px] align-baseline"
								class:opacity-100={cursorVisible}
								class:opacity-0={!cursorVisible}
								style="background: var(--accent);"
								aria-hidden="true"
							></span>
						</span>
					</h1>
				</div>

				<div class="flex justify-center pt-2 md:pt-4">
					<div class="h-px w-24 rounded-full" style="background: var(--gradient-primary);"></div>
				</div>
			</div>

			<p class="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed sm:text-lg pt-4">
				Hi, I'm <strong class="text-foreground">Mathera</strong>, a passionate mathematics educator
				dedicated to making complex concepts click. From foundational algebra to advanced calculus,
				I craft personalized learning journeys that build real understanding, not just exam scores.
			</p>

			<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
				<button class="btn-modern group" onclick={() => smoothScrollTo('courses')}>
					<span class="flex items-center gap-2">
						<span>Explore Courses</span>
						<svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
						</svg>
					</span>
				</button>
				<button class="btn-outline" onclick={() => smoothScrollTo('register')}>
					Register Now
				</button>
			</div>
		</div>

		<div class="mt-12 w-full max-w-4xl">
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
				{#each stats as stat, i}
					<div
						class="card-modern text-center !p-5"
						style="animation-delay: {i * 0.1}s;"
					>
						<div
							class="gradient-text text-3xl font-bold sm:text-4xl"
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
			<span class="text-xs uppercase tracking-widest">Scroll</span>
			<div class="flex h-8 w-5 items-start justify-center rounded-full border-2 py-1"
				style="border-color: var(--muted-foreground);">
				<div class="animate-bounce h-2 w-0.5 rounded-full" style="background: var(--primary);"></div>
			</div>
		</button>
	</div>
</section>
