<script lang="ts">
	import { t } from 'svelte-i18n';
	const year = new Date().getFullYear();
</script>

<footer class="p-4 text-center">
	<p>{@html $t('footer', { values: { year } })}</p>
</footer>
