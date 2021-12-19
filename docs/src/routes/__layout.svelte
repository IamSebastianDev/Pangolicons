<script>
	import '../app.css';
	import Navigation from '$lib/Navigation/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';

	import { initalizeColorScheme } from '../stores/colorScheme.js';

	const init = () => {
		initalizeColorScheme();
	};
</script>

<svelte:body use:init />

<Navigation />

<main class="max-w-screen-lg mx-auto md:px-0 px-5">
	<slot />
</main>

<Footer />
