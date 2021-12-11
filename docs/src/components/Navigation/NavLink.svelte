<script>
	export let href = '';
	export let target = '_self';
	export let title = '';
	export let classes = '';
</script>

<a
	on:click
	{href}
	{target}
	{title}
	rel="norefferer noopener"
	class="font-comfortaa font-semibold dark:font-light text-slate-800 dark:text-white hover:text-pangol-500  dark:hover:text-pangol-100 text-2xl md:text-base hover:underline {classes}"
>
	<slot />
</a>
