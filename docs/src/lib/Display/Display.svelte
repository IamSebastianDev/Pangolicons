<!-- @format -->
<script>
	import { Pangolicons } from 'pangolicons';
	import { schemeIsDark } from '../../stores/colorScheme.js';

	import Pangol from '../UI/Pangol.svelte';
	import Section from '../UI/Section.svelte';
	import Iconcard from './Iconcard.svelte';
	import IconSearch from './IconSearch.svelte';
	import IconController from './IconController.svelte';
	import IconControlRange from './IconControlRange.svelte';
	import IconControlColor from './IconControlColor.svelte';

	const { icons } = Pangolicons;
	const numberOfIcons = Object.keys(icons).length;

	let strokeWidth = 1.5;
	let size = 24;
	$: color = $schemeIsDark ? '#fafafa' : '#1e293b';

	let searchString = '';
	$: filteredIcons =
		Pangolicons.search({ searchString }) || Object.values(icons);

	let showCustomizer = false;
	const toggleCustomizer = () => {
		showCustomizer = !showCustomizer;
	};
</script>

<Section id="icon-display">
	<form class="md:mx-4 grid grid-cols-1 text-slate-800 dark:text-white">
		<IconController>
			<IconSearch {numberOfIcons} bind:value={searchString} />
		</IconController>
		<IconController classes="pl-2">
			<h3
				class="font-comfortaa font-semibold text-2xl text-slate-800 tracking-wider dark:text-white"
			>
				Customize the Icons:
			</h3>
			<button
				class="p-2 hover:bg-pangol-300 dark:hover:bg-white hover:text-white dark:hover:text-pangol-500 rounded-sm"
				type="button"
				on:click={toggleCustomizer}
			>
				<Pangol
					name={showCustomizer ? 'chevronUp' : 'chevronDown'}
					attributes={{ 'stroke-width': 1.5, width: 32, height: 32 }}
				/>
			</button>
		</IconController>
		{#if showCustomizer}
			<IconController col={true}>
				<IconControlRange
					bind:value={strokeWidth}
					id="icon-stroke"
					min="0.5"
					max="3"
					step="0.25"
				>
					Stroke-width:
				</IconControlRange>
				<IconControlRange
					bind:value={size}
					id="icon-size"
					min="12"
					max="80"
					step="4"
				>
					Size:
				</IconControlRange>
				<IconControlColor bind:value={color} id="icon-color"
					>Color:
				</IconControlColor>
			</IconController>
		{/if}
	</form>
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-center gap-5 py-4 md:mx-4"
	>
		{#each filteredIcons as Icon, index (index)}
			<Iconcard
				name={Icon.name}
				attributes={{
					'stroke-width': strokeWidth,
					width: size,
					height: size,
					color,
				}}
			/>
		{:else}
			<p
				class="col-span-full text-center font-open text-slate-800 dark:text-slate-300 text-2xl tracking-wider"
			>
				Found no Icon matching "{searchString}"
			</p>
		{/each}
	</div>
</Section>
