<script>
	import Pangol from '../UI/Pangol.svelte';
	import NavItem from './NavItem.svelte';
	import NavLink from './NavLink.svelte';

	export let attributes = {};
</script>

<NavItem>
	<NavLink
		href="/docs/pangolicons"
		title="Documentation"
		classes="hover:text-pangol-500"
	>
		<Pangol name="clipboardNotes" {attributes}>Docs</Pangol>
	</NavLink>
</NavItem>
<NavItem>
	<NavLink href="/packages" title="Packages" classes="hover:text-pangol-500">
		<Pangol name="parcel" {attributes}>Packages</Pangol>
	</NavLink>
</NavItem>
<NavItem>
	<NavLink
		href="https://github.com/iamsebastiandev/pangolicons"
		title="Github"
		target="_blank"
		classes="hover:text-pangol-500"
	>
		<Pangol name="github" {attributes}>Github</Pangol>
	</NavLink>
</NavItem>
