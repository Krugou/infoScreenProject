<script lang="ts">
	import { t } from 'svelte-i18n';
	const year = new Date().getFullYear();
</script>

<div class="bg-white p-4 text-center">
	<p>{@html $t('footer')}</p>
</div>
