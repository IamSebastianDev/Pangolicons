<script>
	export let href = '';
	export let target = '_self';
	export let title = '';
</script>

<a
	class="mx-4 px-4 py-2 my-2 font-open text-center text-lg border border-slate-300 dark:border-pangol-500 text-slate-800 dark:text-white rounded-lg dark:hover:bg-pangol-900 dark:hover:border-white hover:bg-slate-100"
	{href}
	{title}
	{target}
	rel="norefferer noopener"><slot /></a
>
