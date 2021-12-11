<script>
	import Pangol from '../UI/Pangol.svelte';

	export let numberOfIcons;
	export let value = '';

	const handleReset = () => {
		value = '';
	};
</script>

<form>
	<label
		class="flex flex-row justify-between border border-slate-300 dark:border-slate-600 px-4 py-2 md:mx-4 rounded-lg text-slate-600 dark:text-slate-300 focus-within:ring-2 focus-within:border-pangol-500 ring-pangol-500 focus-within:text-pangol-500 bg-slate-50 dark:bg-slate-700"
	>
		<Pangol name="search" classes="p-2" />
		<input
			type="text"
			bind:value
			placeholder="Search {numberOfIcons} Icons."
			class="w-full mx-4 outline-none bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400"
		/>
		{#if value !== ''}
			<button type="button" on:click={handleReset}>
				<Pangol
					name="x"
					classes="p-2 hover:bg-pangol-500 rounded-xl hover:text-white"
				/>
			</button>
		{/if}
	</label>
</form>
