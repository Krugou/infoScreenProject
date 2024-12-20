<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import MainAnimation from './MainAnimation.svelte';
	import { isActive, INACTIVITY_TIMEOUT } from '../stores/activityStore.js';

	let activityTimer: ReturnType<typeof setTimeout>;

	function resetTimer() {
		clearTimeout(activityTimer);
		$isActive = true;
		activityTimer = setTimeout(() => {
			$isActive = false;
		}, INACTIVITY_TIMEOUT);
	}

	function handleActivity() {
		resetTimer();
	}

	onMount(() => {
		resetTimer();
		window.addEventListener('mousemove', handleActivity);
		window.addEventListener('keypress', handleActivity);
		window.addEventListener('click', handleActivity);
		window.addEventListener('touchstart', handleActivity);
	});

	onDestroy(() => {
		clearTimeout(activityTimer);
		window.removeEventListener('mousemove', handleActivity);
		window.removeEventListener('keypress', handleActivity);
		window.removeEventListener('click', handleActivity);
		window.removeEventListener('touchstart', handleActivity);
	});
</script>

<main class="h-full w-full bg-black p-4">
	{#if !$isActive}
		<MainAnimation />
	{/if}
</main>
