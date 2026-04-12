<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';
	import { i18n, toggleLocale, t } from '$lib/i18n.svelte';
	import LanguagePicker from './language-picker.svelte';

	let { isSidebarOpen, toggleSidebar } = $props();

	let isScrolled = $state(false);

	let navLinks = $derived([
		{ name: t('nav.about'), href: '/#about', isCTA: false },
		{ name: t('nav.courses'), href: '/#courses', isCTA: false },
		{ name: t('nav.experiences'), href: '/#experiences', isCTA: false }
	]);

	function handleScroll() {
		if (browser) {
			isScrolled = window.scrollY > 16;
		}
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			isScrolled = window.scrollY > 16;
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
			document.body.classList.remove('overflow-hidden');
		}
	});

	const handleNavClick = () => {
		isSidebarOpen = false;
		if (browser) {
			document.body.classList.remove('overflow-hidden');
		}
	};

	function smoothScrollTo(targetId: string) {
		if (!browser) return;
		if (targetId.startsWith('#')) {
			const el = document.getElementById(targetId.slice(1));
			if (el) {
				const navbarHeight = 80;
				const rect = el.getBoundingClientRect();
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				window.scrollTo({ top: rect.top + scrollTop - navbarHeight, behavior: 'smooth' });
				return;
			}
		}
	}

	function handleNavigation(event: Event, href: string) {
		event.preventDefault();
		if (isSidebarOpen) handleNavClick();

		if (href.startsWith('/#')) {
			smoothScrollTo(href.substring(1));
			if (browser) history.pushState(null, '', href);
			return;
		}
		smoothScrollTo(href);
	}
</script>

<header
	class="fixed z-100 flex w-full items-center justify-center p-0 transition-all duration-500 ease-out"
	class:mt-4={isScrolled}
>
	<nav
		class="flex w-full items-center justify-between transition-all duration-500 ease-out {isScrolled
			? 'glass-effect shadow-soft mx-4 max-w-4xl rounded-2xl px-4 py-2'
			: 'container-modern !mt-2 px-4 py-2 border border-transparent'}"
		class:backdrop-blur-xl={isScrolled}
		class:hidden={isSidebarOpen}
		style="
			transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
		"
	>
		<a
			href="/"
			class="group flex items-center space-x-2 font-bold transition-all duration-300 hover:scale-105"
			onclick={(e) => handleNavigation(e, '/')}
		>
			<div class="flex items-center space-x-2">
				<img src="/logo.png" alt="Mathera Logo" class="h-10 w-auto object-contain drop-shadow-sm" />
				{#if !isScrolled}
					<span class="gradient-text text-xl transition-all duration-300 font-bold">
						Mathera
					</span>
				{/if}
			</div>
		</a>

		<div class="hidden items-center space-x-0 md:flex" class:justify-center={isScrolled}>
			{#each navLinks as link}
				<a
					href={link.href}
					class="hover:bg-secondary/50 relative rounded-lg px-3 py-2 font-medium transition-all duration-300 hover:scale-105 text-muted-foreground hover:text-foreground
						{link.isCTA ? 'text-accent!' : ''}"
					onclick={(e) => handleNavigation(e, link.href)}
				>
					<span class="relative">
						{link.name}
						{#if link.isCTA}
							<span class="from-primary to-accent absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-to-r"></span>
						{/if}
					</span>
				</a>
			{/each}
		</div>

		<div class="md:hidden">
			<button
				class="hover:bg-secondary/50 rounded-lg p-2 transition-all duration-300 hover:scale-105"
				onclick={toggleSidebar}
				aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
			>
				<div class="flex h-6 w-6 flex-col items-center justify-center">
					<span class="block h-0.5 w-5 bg-current transition-all duration-300 {isSidebarOpen ? 'translate-y-0.5 rotate-45' : ''}"></span>
					<span class="mt-1 block h-0.5 w-5 bg-current transition-all duration-300 {isSidebarOpen ? 'opacity-0' : ''}"></span>
					<span class="mt-1 block h-0.5 w-5 bg-current transition-all duration-300 {isSidebarOpen ? '-translate-y-1.5 -rotate-45' : ''}"></span>
				</div>
			</button>
		</div>

		<div class="hidden md:flex items-center space-x-3">
			<LanguagePicker />

			<a
				href="/#register"
				onclick={(e) => handleNavigation(e, '/#register')}
				class="btn-modern group relative overflow-hidden !px-4 !py-2 text-sm"
			>
				<span class="relative z-10 flex items-center space-x-2">
					<span>{t('hero.cta_short') || 'Enroll Now'}</span>
					<svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
					</svg>
				</span>
			</a>
		</div>
	</nav>
</header>

<div
	class="fixed inset-0 z-40 transition-opacity duration-300 md:hidden {isSidebarOpen
		? 'pointer-events-auto opacity-100'
		: 'pointer-events-none opacity-0'}"
>
	<div
		class="glass-effect absolute top-0 right-0 h-full w-full max-w-full transform transition-transform duration-500 ease-out {isSidebarOpen
			? 'translate-x-0'
			: 'translate-x-full'}"
		style="background: oklch(from var(--card) l c h / 0.97);"
	>
		<div class="flex justify-between items-center p-6">
			<div class="flex items-center space-x-2">
				<img src="/logo.png" alt="Mathera Logo" class="h-10 w-auto object-contain drop-shadow-sm" />
				<span class="gradient-text text-xl font-bold">Mathera</span>
			</div>
			<div class="flex items-center space-x-4">
				<LanguagePicker />
				<button
					class="hover:bg-secondary/50 rounded-full p-2 transition-colors"
					onclick={handleNavClick}
					aria-label="Close sidebar"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</div>

		<div class="mt-4 flex flex-col space-y-2 px-6">
			{#each navLinks as link}
				<a
					href={link.href}
					class="group hover:bg-secondary/50 relative flex items-center rounded-xl px-4 py-4 text-lg font-medium transition-all duration-300 text-muted-foreground hover:text-foreground"
					onclick={(e) => handleNavigation(e, link.href)}
				>
					<span class="relative">{link.name}</span>
					<svg class="text-muted-foreground group-hover:text-foreground ml-auto h-4 w-4 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			{/each}

			<div class="border-border/50 mt-6 border-t pt-6">
				<a
					href="/#register"
					class="btn-modern block w-full text-center"
					onclick={(e) => { handleNavigation(e, '/#register'); handleNavClick(); }}
				>
					{t('hero.cta_short') || 'Enroll Now'} →
				</a>
			</div>
		</div>

		<div class="absolute bottom-8 left-0 right-0 px-6 text-center">
			<p class="text-muted-foreground text-sm">{t('footer.tagline')}</p>
		</div>
	</div>
</div>
