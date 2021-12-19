<script>
	import NavLink from '../Navigation/NavLink.svelte';
	import Pangol from './Pangol.svelte';
</script>

<div
	class="flex flex-row justify-center items-center absolute bottom-0 m-4 p-2"
>
	<NavLink
		href="https://twitter.com/iamsebastiandev"
		classes="mx-4 p-2 hover:bg-pangol-300 dark:hover:bg-white hover:text-white dark:hover:text-pangol-500 rounded-sm"
	>
		<Pangol name="twitter" />
	</NavLink>
	<NavLink
		href="https://github.com/iamsebastiandev"
		classes="mx-4 p-2 hover:bg-pangol-300 dark:hover:bg-white hover:text-white dark:hover:text-pangol-500 rounded-sm"
	>
		<Pangol name="github" />
	</NavLink>
</div>
