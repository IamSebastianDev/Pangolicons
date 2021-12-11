<script>
	import { Pangolicons } from 'pangolicons';

	export let name;
	export let attributes = {};

	$: icon = Pangolicons.icons[name];
</script>

{@html icon.toString(attributes)}
