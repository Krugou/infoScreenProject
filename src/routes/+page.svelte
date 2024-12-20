<script lang="ts">
	import Header from '../components/Header.svelte';
	import Main from '../components/Main.svelte';
	import Footer from '../components/Footer.svelte';
	import '../i18n.ts';
	import { t, locale, init } from 'svelte-i18n';

	// Initialize i18n with default locale
	init({
		fallbackLocale: 'en',
		initialLocale: 'en'
	});
</script>

{#if $locale}
	<div class="container m-4 flex h-screen flex-col p-4">
		<Header title={$t('title')} />
		<Main />
		<Footer />
	</div>
{:else}
	<div class="flex h-screen items-center justify-center">
		<div class="text-lg">Loading...</div>
	</div>
{/if}
