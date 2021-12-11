<script>
	import Icon from '../UI/Icon.svelte';
	export let name;
	export let attributes;
</script>

<a href={'/assets/icons/svgs/' + name + '.svg'} download>
	<Icon {name} {attributes} />
	<p>{name}</p>
</a>
