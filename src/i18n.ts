import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('fi', () => import('./locales/fi.json'));

init({
	fallbackLocale: 'en',
	initialLocale: getLocaleFromNavigator(),
});
