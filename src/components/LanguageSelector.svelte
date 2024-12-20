<script lang="ts">
	import { locale, t } from 'svelte-i18n';
	import { onMount } from 'svelte';

	const availableLanguages = ['en', 'fi', 'swe'];
	let currentLocale: string = 'en';

	$: currentLocale = $locale;

	onMount(() => {
		const savedLocale = localStorage.getItem('preferred-locale');
		if (savedLocale && availableLanguages.includes(savedLocale)) {
			locale.set(savedLocale);
		}
	});

	function changeLanguage(event: Event) {
		const select = event.target as HTMLSelectElement;
		const newLocale = select.value;
		locale.set(newLocale);
		localStorage.setItem('preferred-locale', newLocale);
	}
</script>

<div class="relative">
	<select
		class="block appearance-none rounded border border-gray-300 bg-white px-4 py-2 pr-8 leading-tight focus:border-gray-500 focus:outline-none"
		on:change={changeLanguage}
		bind:value={currentLocale}
	>
		{#each availableLanguages as lang}
			<option value={lang}>
				{$t(`languages.${lang}`)}
			</option>
		{/each}
	</select>
</div>
