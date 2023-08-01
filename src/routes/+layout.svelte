<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from './Footer.svelte';
</script>

<div class="app min-h-screen">
	<Header />

	<main class="min-h-screen">
		<slot />
	</main>

	<Footer />
	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>
