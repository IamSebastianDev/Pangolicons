<script>
	import Pangol from '../UI/Pangol.svelte';
	export let name;
	export let attributes;
</script>

<a
	href={'/assets/icons/svgs/' + name + '.svg'}
	title="Download {name}"
	download
	class="flex flex-col justify-center items-center border border-slate-300 dark:border-slate-600 px-2 py-4 rounded-lg text-slate-600 dark:text-slate-300 w-full hover:border-pangol-100 hover:ring-2 ring-pangol-100"
>
	<Pangol {name} {attributes} classes="w-24 h-24 p-2" />
	<p class="text-xs font-open font-light p-2">{name}</p>
</a>
