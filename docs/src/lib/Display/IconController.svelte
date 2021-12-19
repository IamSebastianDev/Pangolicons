<script>
	import { slide } from 'svelte/transition';
	export let classes = '';
	export let col = false;
</script>

<div
	transition:slide={{ duration: 200 }}
	class="flex {col
		? 'flex-col'
		: 'flex-row items-center'} md:flex-row justify-between md:items-center py-4 {classes}"
>
	<slot />
</div>
