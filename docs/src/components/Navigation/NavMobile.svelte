<script>
	import NavList from './NavList.svelte';
	import NavLink from './NavLink.svelte';
	import Pangol from '../UI/Pangol.svelte';

	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	export let showMobileNav;
	export let attributes = { class: 'hidden' };
</script>

{#if showMobileNav}
	<div
		class="fixed flex flex-col justify-center items-center top-0 left-0 w-screen h-screen p-12  text-slate-800 dark:text-white bg-white dark:bg-pangol-700"
		transition:fly={{ duration: 500, x: -300, easing: quintInOut }}
	>
		<NavLink
			classes="absolute top-0 right-0 m-4 p-2 hover:bg-pangol-300 dark:hover:bg-white hover:text-white dark:hover:text-pangol-500 rounded-sm"
			on:click={() => {
				showMobileNav = !showMobileNav;
			}}
		>
			<Pangol name="x" />
		</NavLink>
		<ul class="flex flex-col justify-around items-center h-1/2">
			<NavList {attributes} />
		</ul>
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
	</div>
{/if}
