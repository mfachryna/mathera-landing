import { translations } from './translations';

export const i18n = $state({ locale: 'fi' });

export function t(key: string): any {
	const keys = key.split('.');
	let current: any = translations[i18n.locale];

	for (const k of keys) {
		if (current === undefined || current === null) return key;
		current = current[k];
	}

	return current ?? key;
}

export function toggleLocale() {
	i18n.locale = i18n.locale === 'en' ? 'fi' : 'en';
}
