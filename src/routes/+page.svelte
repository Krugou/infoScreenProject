<script lang="ts">
	import Main from '../components/Main.svelte';
	import { locale } from 'svelte-i18n';
</script>

{#if $locale}
	<div class="h-full">
		<Main />
	</div>
{:else}
	<div class="flex h-screen items-center justify-center">
		<div class="text-lg">Loading...</div>
	</div>
{/if}
