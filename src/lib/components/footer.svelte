<script lang="ts">
	import Icon from '@iconify/svelte';
	import AnimateOnScroll from './animate-on-scroll.svelte';

	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ name: 'WhatsApp', icon: 'simple-icons:whatsapp', href: 'https://wa.me/628123456789', color: 'text-green-500' },
		{ name: 'Instagram', icon: 'simple-icons:instagram', href: 'https://instagram.com', color: 'text-pink-500' },
		{ name: 'YouTube', icon: 'simple-icons:youtube', href: 'https://youtube.com', color: 'text-red-500' },
	];

	const mathFacts = [
		'∑ The word "mathematics" comes from the Greek "máthēma" meaning learning.',
		'π Pi contains every possible sequence of numbers.',
		'∞ There are more types of infinity than one.',
		'√ The square root symbol is called a "radical".',
	];

	let factIndex = $state(0);

	function openLink(url: string) {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

<footer class="relative overflow-hidden border-t" style="border-color: var(--border);">
	<div
		class="absolute inset-0 opacity-50"
		style="background: linear-gradient(180deg, transparent, oklch(from var(--primary) l c h / 0.03));"
	></div>

	<div class="relative z-10 container-modern section-padding">
		<div class="space-y-8 text-center">
			<AnimateOnScroll animation="fade" delay={100} threshold={0.1} className="w-full" rootMargin="0px 0px 0px 0px">
				<div>
					<div class="gradient-text mb-2 text-3xl font-bold">
						Mathera
					</div>
					<p class="text-muted-foreground text-sm">
						∑ Making mathematics meaningful, one student at a time
					</p>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="slide" delay={200} threshold={0.1} className="w-full" rootMargin="0px 0px 0px 0px">
				<div class="inline-flex items-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-mono"
					style="background: oklch(from var(--primary) l c h / 0.08); color: var(--primary);"
				>
					{mathFacts[factIndex]}
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="slide" delay={300} threshold={0.1} className="w-full" rootMargin="0px 0px 0px 0px">
				<div class="flex items-center justify-center gap-6">
					<div class="h-px w-16 bg-gradient-to-r from-transparent" style="to: oklch(from var(--primary) l c h / 0.3);"></div>
					<div class="flex items-center gap-3">
						{#each socialLinks as social}
							<button
								class="group rounded-full p-2.5 transition-all duration-300 hover:scale-110"
								style="background: oklch(from var(--primary) l c h / 0.08);"
								onclick={() => openLink(social.href)}
								aria-label={social.name}
								title={social.name}
							>
								<Icon
									icon={social.icon}
									class="h-4 w-4 transition-colors {social.color}"
								/>
							</button>
						{/each}
					</div>
					<div class="h-px w-16 bg-gradient-to-l from-transparent" style="to: oklch(from var(--primary) l c h / 0.3);"></div>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="slide" delay={400} threshold={0.1} className="w-full" rootMargin="0px 0px 0px 0px">
				<div class="text-muted-foreground flex flex-wrap items-center justify-center gap-1.5 text-sm">
					<span>Built with</span>
					<span style="color: var(--accent);">♥</span>
					<span>for math learners everywhere</span>
					<span>•</span>
					<span>© {currentYear} Mathera</span>
				</div>
			</AnimateOnScroll>

			<AnimateOnScroll animation="slide" delay={500} threshold={0.1} className="w-full" rootMargin="0px 0px 0px 0px">
				<button
					class="text-muted-foreground hover:text-foreground group inline-flex items-center gap-1.5 text-xs transition-all duration-300 hover:-translate-y-0.5"
					onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
					aria-label="Back to top"
				>
					<Icon icon="ph:arrow-up" class="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
					<span>Back to top</span>
				</button>
			</AnimateOnScroll>
		</div>
	</div>
</footer>
