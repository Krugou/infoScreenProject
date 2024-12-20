<script lang="ts">
	import { t } from 'svelte-i18n';
	import LanguageSelector from './LanguageSelector.svelte';
</script>

<div class="flex items-center justify-between p-4">
	<h1>{$t('header.title')}</h1>
	<LanguageSelector />
</div>
