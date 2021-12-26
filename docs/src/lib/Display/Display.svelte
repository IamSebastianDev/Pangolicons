<!-- @format -->
<script>
	import { Pangolicons } from 'pangolicons';
	import {
		rainbow,
		colorScheme,
		setInitial,
	} from '../../stores/colorScheme.js';
	import { onMount } from 'svelte';

	// rainbow mode offset
	let frames = 0;

	onMount(() => {
		setInitial();

		const updateFrameCount = () => {
			frames++;
			window.requestAnimationFrame(updateFrameCount);
		};

		updateFrameCount();
	});

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
	$: color = $colorScheme === 'dark' ? '#ffffff' : '#1e293b';

	const createColorArray = ({ numberOfIcons }) => {
		let rainbow = new Array(numberOfIcons);

		const toHex = (i, phase) => {
			let sin = Math.sin((Math.PI / size) * 2 * i + phase);
			let int = Math.floor(sin * 127) + 128;
			let hex = int.toString(16);

			return hex.length === 1 ? '0' + hex : hex;
		};

		for (var i = 0; i < numberOfIcons; i++) {
			let red = toHex(i, (0 * Math.PI * 2) / 3); // 0   deg
			let blue = toHex(i, (1 * Math.PI * 2) / 3); // 120 deg
			let green = toHex(i, (2 * Math.PI * 2) / 3); // 240 deg

			rainbow[i] = '#' + red + green + blue;
		}

		return rainbow;
	};
	const ArrayOfColors = createColorArray({ numberOfIcons });

	$: getColor = ({ index, numberOfIcons }) =>
		$rainbow ? ArrayOfColors[(index + frames) % numberOfIcons] : color;

	// filter the icons accoring to the currently entered searchString

	let searchString = '';
	$: filteredIcons =
		Pangolicons.search({ searchString }) || Object.values(icons);

	// handle the customizer modal

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
				name="Customize Icons"
				aria-label="Customize Icons"
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
		class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 py-4 md:mx-4"
	>
		{#each filteredIcons as Icon, index (index)}
			<Iconcard
				name={Icon.name}
				attributes={{
					'stroke-width': strokeWidth,
					width: size,
					height: size,
					// color: ArrayOfColors[(index + offset) % numberOfIcons],
					color: getColor({
						index,
						numberOfIcons: filteredIcons.length | numberOfIcons,
					}),
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
