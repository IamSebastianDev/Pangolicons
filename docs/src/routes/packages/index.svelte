<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/getPackages');

		if (res.ok) return { props: { packages: await res.json() } };

		return {
			status: res.status,
			error: new Error(),
		};
	}
</script>

<script>
	import Section from '$lib/UI/Section.svelte';
	import Package from '$lib/Packages/Package.svelte';

	export let packages;
</script>

<svelte:head>
	<title>Pangolicons | Packages</title>
</svelte:head>

<Section id="packages">
	<div class="text-center my-8 text-slate-700 dark:text-white">
		<h1 class="font-comfortaa font-semibold text-5xl py-4 ">Packages</h1>
		<p class="font-open text-xl py-4">
			Below is a (hopefully) evergrowing list of packages available for
			Pangolicons.
		</p>
	</div>
	<div class="flex flex-col md:grid md:grid-cols-2 gap-24">
		{#each packages as pkg}
			<Package {pkg} />
		{/each}
	</div>
</Section>
