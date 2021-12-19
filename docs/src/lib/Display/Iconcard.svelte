<script>
	import Pangol from '../UI/Pangol.svelte';
	import Card from '../UI/Card.svelte';

	export let name;
	export let attributes;
</script>

<Card classes="hover:border-pangol-100 hover:ring-2 ring-pangol-100 w-full">
	<a
		href={'/assets/icons/svgs/' + name + '.svg'}
		title="Download {name}"
		download
		class="flex flex-col justify-center items-center h-full w-full"
	>
		<Pangol {name} {attributes} classes="w-24 h-24 p-2" />
		<p class="text-sm font-open font-light p-2 break-all text-center">
			{name}
		</p>
	</a>
</Card>
