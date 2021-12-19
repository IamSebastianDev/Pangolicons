<script>
	export let id;
	export let max;
	export let min;
	export let step;
	export let value;
</script>

<div
	class="grid grid-cols-4 gap-x-2 place-items-center justify-items-center px-4 py-2 mx-2 whitespace-nowrap"
>
	<label class="w-full col-span-full text-lg py-3" for={id}>
		<slot />
	</label>
	<input
		class="flex flex-row justify-center items-center w-full appearance-none focus:outline-none bg-transparent py-3 h-10 col-span-3"
		type="range"
		{max}
		{min}
		{step}
		{id}
		name={id}
		bind:value
	/>
	<span class="text-xs font-light font-comfortaa px-2 w-10">
		{value}px
	</span>
</div>

<style lang="postcss">
	input[type='range']::-webkit-slider-runnable-track {
		@apply w-full h-2 cursor-pointer bg-slate-300 rounded-md;
	}

	input[type='range']:focus::-webkit-slider-runnable-track {
		@apply bg-pangol-100;
	}

	input[type='range']::-webkit-slider-thumb {
		@apply h-4 w-4 -mt-1 rounded-full bg-pangol-500 cursor-pointer appearance-none;
	}

	input[type='range']::-webkit-slider-thumb:hover {
		@apply ring-4 ring-pangol-100;
	}

	input[type='range']::-moz-range-track {
		@apply w-full h-2 cursor-pointer bg-slate-300 rounded-md;
	}

	input[type='range']:focus::-moz-range-track {
		@apply bg-pangol-100;
	}

	input[type='range']::-moz-range-thumb {
		@apply h-4 w-4 -mt-1 rounded-full bg-pangol-500 cursor-pointer appearance-none;
	}

	input[type='range']::-moz-range-thumb:hover {
		@apply ring-4 ring-pangol-100;
	}
</style>
