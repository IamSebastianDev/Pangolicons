<script>
	import Pangol from '../UI/Pangol.svelte';
	import NavigationList from './NavList.svelte';
	import NavLink from './NavLink.svelte';
	import NavMobile from './NavMobile.svelte';

	import {
		schemeIsDark,
		toggleColorScheme,
	} from '../../scripts/colorScheme.js';
	import Icon from '../UI/Icon.svelte';

	let attributes = {
		'stroke-width': 1.5,
		width: 24,
		height: 24,
	};

	let showMobileNav = false;
</script>

<nav
	class="fixed top-0 md:relative mx-auto flex flex-row max-w-screen-lg flex-shrink-0 border-b border-b-slate-100 dark:border-slate-700 dark:bg-slate-800 bg-white items-center"
>
	<NavMobile bind:showMobileNav />
	<NavLink href="/" title="Home" classes="px-6 py-4 mr-auto">
		<Pangol reverse="true" name="pangolin" {attributes}>Pangolicons</Pangol>
	</NavLink>
	<ul class="hidden md:flex flex-row items-center ml-auto py-2">
		<NavigationList {attributes} />
	</ul>
	<NavLink
		on:click={() => {
			showMobileNav = !showMobileNav;
		}}
		classes="p-2 mx-4 md:hidden hover:bg-pangol-300 dark:hover:bg-white hover:text-white dark:hover:text-pangol-500 rounded-sm"
	>
		<Pangol
			name="verticalMore"
			attributes={{ 'stroke-width': 2, ...attributes }}
		/>
	</NavLink>
	<NavLink
		on:click={toggleColorScheme}
		classes="p-2 mx-4 hover:bg-pangol-300 dark:hover:bg-white hover:text-white dark:hover:text-pangol-500 rounded-sm"
	>
		<Pangol name={$schemeIsDark ? 'sunBig' : 'moonStylized'} {attributes} />
	</NavLink>
</nav>
