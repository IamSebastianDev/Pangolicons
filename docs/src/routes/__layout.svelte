<script>
	import '../app.css';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<Navigation />

<main class="max-w-screen-lg mx-auto md:px-0 px-5">
	<slot />
</main>

<Footer />
