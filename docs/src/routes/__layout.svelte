<script>
	import { initalizeColorScheme } from '../scripts/colorScheme.js';
	import { onMount } from 'svelte';

	onMount(() => {
		initalizeColorScheme();
	});

	import Navigation from '../components/Navigation/Navigation.svelte';
</script>

<Navigation />

<main class="max-w-screen-lg mx-auto md:px-0 px-5">
	<slot />
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply dark:bg-slate-800 bg-white;
	}
</style>
