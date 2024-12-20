<script lang="ts">
	export let title: string;
	import { locale, t } from 'svelte-i18n';

	// Define available languages
	const availableLanguages = ['en', 'fi'];

	function changeLanguage(lang: string) {
		locale.set(lang);
	}
</script>

<div class="flex justify-between">
	<h1>{title}</h1>
	<div>
		{#each availableLanguages as lang}
			<button
				class="mx-1 rounded px-3 py-1 hover:bg-gray-100"
				on:click={() => changeLanguage(lang)}
			>
				{$t(`languages.${lang}`)}
			</button>
		{/each}
	</div>
</div>
