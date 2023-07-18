<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app min-h-screen">
	<Header />

	<main class="min-h-screen">
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
