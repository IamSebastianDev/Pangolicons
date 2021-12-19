<script>
	import * as Pangolicons from 'pangolicons';

	export let name;
	export let attributes = {};

	$: icon = Pangolicons[name];
</script>

{@html icon.toString(attributes)}
