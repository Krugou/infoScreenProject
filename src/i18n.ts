import { register, init, getLocaleFromNavigator, waitLocale } from 'svelte-i18n';

const LOCALES = {
	en: '/locales/en.json',
	fi: '/locales/fi.json'
};

// Helper to load locale files
async function loadLocaleData(locale: string) {
	try {
		const response = await fetch(
			// @ts-expect-error - Vite types are not up-to-date
			process.env.NODE_ENV === 'production' ? `${LOCALES[locale]}` : `/src/locales/${locale}.json`
		);
		const data = await response.json();
		return data;
	} catch (e) {
		console.error(`Error loading locale ${locale}:`, e);
		return {};
	}
}

// Register locales
Object.keys(LOCALES).forEach((locale) => {
	register(locale, () => loadLocaleData(locale));
});

// Initialize i18n
init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator()
});

// Export waitLocale to ensure translations are loaded
export { waitLocale };
