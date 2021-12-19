<script>
	import Pangol from '../UI/Pangol.svelte';

	let element;

	const handleFocus = (ev) => {
		if (ev.key === '/') {
			ev.preventDefault();
			element.focus();
			window.scrollTo({ top: 0 });
		}
	};

	let hasFocus = false;
	const setFocus = (ev) => {
		hasFocus = ev.type === 'focus';
	};

	export let numberOfIcons;
	export let value = '';

	$: placeholder = `Search ${numberOfIcons} Icons. ${
		!hasFocus ? "Press '/' to focus." : ''
	}`;

	const handleReset = () => {
		value = '';
	};
</script>

<svelte:window on:keypress={handleFocus} />

<div
	class="flex flex-row justify-between border border-slate-300 dark:border-slate-600 px-4 py-2 rounded-lg text-slate-600 dark:text-slate-300 focus-within:ring-2 focus-within:border-pangol-500 ring-pangol-500 focus-within:text-pangol-500 bg-slate-50 dark:bg-slate-700 w-full"
>
	<Pangol name="search" classes="p-2" />
	<label class="hidden" for="searchbar">Search for Icons</label>
	<input
		id="searchbar"
		type="text"
		{placeholder}
		bind:this={element}
		bind:value
		on:focus={setFocus}
		on:blur={setFocus}
		class="w-full mx-4 outline-none bg-transparent text-slate-800 dark:text-white placeholder:text-slate-400"
		autocomplete="off"
	/>
	{#if value !== ''}
		<button type="button" on:click={handleReset}>
			<Pangol
				name="x"
				classes="p-2 hover:bg-pangol-500 rounded-xl hover:text-white"
			/>
		</button>
	{/if}
</div>
