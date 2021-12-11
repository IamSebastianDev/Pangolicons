<script>
	import Pangol from '../UI/Pangol.svelte';
	import NavItem from './NavItem.svelte';
	import NavLink from './NavLink.svelte';

	export let attributes = {};
</script>

<NavItem>
	<NavLink href="/docs" title="Documentation">
		<Pangol name="text" {attributes}>Docs</Pangol>
	</NavLink>
</NavItem>
<NavItem>
	<NavLink href="/packages" title="Packages">
		<Pangol name="package" {attributes}>Packages</Pangol>
	</NavLink>
</NavItem>
<NavItem>
	<NavLink
		href="https://github.com/iamsebastiandev/pangolicons"
		title="Github"
		target="_blank"
	>
		<Pangol name="github" {attributes}>Github</Pangol>
	</NavLink>
</NavItem>
