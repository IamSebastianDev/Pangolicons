<script>
	import Icon from './Icon.svelte';

	export let name;
	export let classes = '';
	export let attributes = {};
	export let reverse = false;

	let padding =
		$$slots.default && attributes.class !== 'hidden'
			? !reverse
				? 'pr-3'
				: 'pl-3'
			: '';
</script>

<span
	class="flex {reverse
		? 'flex-row-reverse'
		: 'flex-row'} justify-center items-center {classes}"
>
	<span class="{padding} mt-.5"><slot /></span>
	<Icon {name} {attributes} />
</span>
