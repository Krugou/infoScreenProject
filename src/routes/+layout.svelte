<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../i18n.ts';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-50 bg-white shadow-md">
		<Header />
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<footer class="sticky bottom-0 z-50 bg-white shadow-md">
		<Footer />
	</footer>
</div>
