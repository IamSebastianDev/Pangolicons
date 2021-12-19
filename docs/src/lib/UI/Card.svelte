<script>
	export let classes;
</script>

<div
	class="flex flex-col justify-between items-center border m-2 border-slate-300 dark:border-slate-600 px-4 py-6 rounded-lg text-slate-600 dark:text-slate-300 {classes}"
>
	<slot />
</div>
