<script>
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import Navbar from '../lib/components/navbar.svelte';
	import ScrollIndicator from '$lib/components/scroll-indicator.svelte';
	import LoadingIndicator from '$lib/components/loading-indicator.svelte';
	let { children } = $props();
	import { Toaster } from 'svelte-french-toast';
	import { onMount, onDestroy } from 'svelte';
	import Accent from '$lib/components/accent.svelte';
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	let mounted = false;
	let showScrollTop = writable(false);
	let isSidebarOpen = $state(false);

	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
		if (browser) {
			document.body.classList.toggle('overflow-hidden', isSidebarOpen);
		}
	}

	function scrollToTop() {
		if (browser) {
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
				setTimeout(() => {
					if (window.scrollY > 0) window.scrollTo(0, 0);
				}, 600);
			});
		}
	}

	function handleScroll() {
		if (browser) {
			$showScrollTop = window.scrollY > 32;
		}
	}

	onMount(() => {
		mounted = true;
		if (browser) {
			console.log('%c Crafted with 💻 by mfachryna ', 'background: #111; color: #C084FC; font-size: 12px; padding: 4px 8px; font-weight: bold; border-radius: 4px;');
			window.addEventListener('scroll', handleScroll);
			$showScrollTop = window.scrollY > 32;
		}
		const mainElement = document.querySelector('main');
		if (mainElement) {
			mainElement.style.opacity = '0';
			mainElement.style.transform = 'translateY(20px)';
			requestAnimationFrame(() => {
				mainElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
				mainElement.style.opacity = '1';
				mainElement.style.transform = 'translateY(0)';
			});
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="x-ua-compatible" content="IE=edge" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>

	<style>
		:root {
			--font-inter: 'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
		}

		html {
			font-family: var(--font-inter);
		}

		body {
			transition:
				opacity 0.3s ease-out,
				transform 0.3s ease-out;
		}

		:focus-visible {
			outline: 2px solid var(--ring);
			outline-offset: 2px;
			border-radius: var(--radius-sm);
		}
	</style>
</svelte:head>

<LoadingIndicator />
<Navbar {isSidebarOpen} {toggleSidebar} />
<Accent />

{#if $showScrollTop && !isSidebarOpen}
	<div class="fixed right-4 bottom-4 z-[999999] transition-all duration-300">
		<button
			onclick={scrollToTop}
			class="bg-card-foreground hover:text-primary cursor-pointer rounded-full p-2.5 backdrop-blur-md transition-opacity duration-300 shadow-soft"
			aria-label="Scroll to top"
			title="Scroll to top"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
			</svg>
		</button>
	</div>
{/if}

<main class="relative bg-transparent">
	<ScrollIndicator />
	<Toaster position="bottom-center" />
	{@render children?.()}
	<Footer />
</main>
