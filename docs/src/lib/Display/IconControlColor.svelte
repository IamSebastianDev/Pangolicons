<script>
	export let id;
	export let value;
</script>

<div
	class="grid grid-cols-4 gap-x-2 place-items-center justify-items-center px-4 py-2 mx-2 whitespace-nowrap"
>
	<label class="w-full col-span-full text-lg py-3" for={id}>
		<slot />
	</label>
	<input
		class="border border-slate-300 dark:border-slate-600 py-3 h-10 px-2 rounded-lg text-slate-600 dark:text-slate-300 col-span-3 bg-slate-50 dark:bg-slate-700 w-full outline-none focus-within:ring-2 focus-within:border-pangol-500 ring-pangol-500 focus-within:text-pangol-500"
		type="text"
		id="{id}-text"
		name="{id}-text"
		bind:value
	/>
	<label
		class="grid place-items-center h-10 w-10 overflow-hidden rounded-lg border border-slate-300 dark:border-slate-600"
		for="{id}-value"
	>
		<input class="-m-2 h-14 w-14" type="color" id="{id}-value" bind:value />
	</label>
</div>
