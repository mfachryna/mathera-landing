<script lang="ts">
	import { i18n, toggleLocale } from '$lib/i18n.svelte';
	import Icon from '@iconify/svelte';

	let { className = '' } = $props();

	let currentLocale = $derived(i18n.locale);
</script>

<div class="lang-picker-container {className}">
	<button
		onclick={toggleLocale}
		class="lang-compact-toggle"
		aria-label="Switch language to {currentLocale === 'en' ? 'Finnish' : 'English'}"
	>
		<Icon icon="lucide:languages" class="h-4 w-4 text-muted-foreground mr-1" />
		<div class="locale-display">
			<div class="locale-track" style="transform: translateY({currentLocale === 'en' ? '0' : '-50%'})">
				<span class="locale-label">EN</span>
				<span class="locale-label">FI</span>
			</div>
		</div>
	</button>
</div>

<style>
	.lang-compact-toggle {
		display: flex;
		align-items: center;
		padding: 0.35rem 0.5rem;
		background: var(--card-foreground);
		border: 1px solid var(--border);
		border-radius: 9999px;
		cursor: pointer;
		transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
		overflow: hidden;
	}

	.lang-compact-toggle:hover {
		border-color: var(--primary);
		background: var(--secondary);
		transform: translateY(-1px);
	}

	.locale-display {
		position: relative;
		height: 1.25rem;
		width: 1.2rem;
		overflow: hidden;
	}

	.locale-track {
		display: flex;
		flex-direction: column;
		transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.locale-label {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.25rem;
		font-size: 0.75rem;
		font-weight: 800;
		color: var(--foreground);
		letter-spacing: 0.05em;
	}
</style>
