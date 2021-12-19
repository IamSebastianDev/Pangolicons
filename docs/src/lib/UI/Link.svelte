<script>
	export let href = '';
	export let target = '_self';
	export let title = '';
	export let classes = '';
</script>

<a
	class="text-slate-500 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white hover:underline {classes}"
	{href}
	{target}
	{title}
	rel="norefferer noopener"
	on:click
>
	<slot />
</a>
