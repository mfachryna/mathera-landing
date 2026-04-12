<script lang="ts">
	const {
		title = '',
		description = '',
		type = 'website',
		image = '',
		url = '',
		keywords = '',
		structuredData = null,
		children
	} = $props<{
		title?: string | undefined;
		description?: string;
		type?: string;
		image?: string;
		url?: string;
		keywords?: string;
		structuredData?: object | null;
		children?: any;
	}>();

	import { t } from '$lib/i18n.svelte';

	const siteUrl = 'https://mathera.fi';
	const defaultImage = '/images/avatar/avatar.jpeg';

	let currentSiteTitle = $derived(t('seo.title') || 'Mathera - Expert Mathematics Tutoring');
	let currentSiteDescription = $derived(t('seo.description') || 'Expert mathematics tutoring by Mathera. Algebra, Calculus, Geometry, Statistics and more.');
	let currentOgTitle = $derived(t('seo.ogTitle') || currentSiteTitle);
	let currentOgDescription = $derived(t('seo.ogDescription') || currentSiteDescription);
</script>

<svelte:head>
	<title>{title || currentSiteTitle}</title>
	<meta name="description" content={description || currentSiteDescription} />
	<meta name="keywords" content={keywords || 'math tutor, algebra tutor, calculus tutor, geometry tutor, online math tutoring, SAT math prep, mathematics expert, learn math, ylioppilaskoe, matematiikka, oppitunnit'} />

	<meta property="og:title" content={title || currentOgTitle} />
	<meta property="og:description" content={description || currentOgDescription} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url || siteUrl} />
	<meta
		property="og:image"
		content={(image || defaultImage).startsWith('http')
			? image || defaultImage
			: `${siteUrl}${image || defaultImage}`}
	/>

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title || currentOgTitle} />
	<meta name="twitter:description" content={description || currentOgDescription} />
	<meta
		name="twitter:image"
		content={(image || defaultImage).startsWith('http')
			? image || defaultImage
			: `${siteUrl}${image || defaultImage}`}
	/>

	{#if structuredData}
		<script type="application/ld+json">
      {JSON.stringify(structuredData)}
		</script>
	{/if}
</svelte:head>

{@render children?.()}
