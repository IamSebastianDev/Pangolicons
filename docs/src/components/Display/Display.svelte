<script>
	import { Pangolicons } from 'pangolicons';
	import { cloudStorm } from '../../../../src/pangolicons';
	import Icon from '../UI/Icon.svelte';

	import Section from '../UI/Section.svelte';
	import Iconcard from './Iconcard.svelte';
	import IconSearch from './IconSearch.svelte';

	const { icons } = Pangolicons;
	const numberOfIcons = Object.keys(icons).length;
	let strokeWidth = 1.5;
	let color = 'current-color';
	let size = 24;

	let searchString = '';
	$: filteredIcons =
		Pangolicons.search({ searchString }) || Object.values(icons);
</script>

<Section id="icon-display">
	<IconSearch {numberOfIcons} bind:value={searchString} />
	<div
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-center gap-5 my-4 py-4 md:mx-4"
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
