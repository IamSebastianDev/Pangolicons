<script>
	import Pangol from './UI/Pangol.svelte';
	import Link from './UI/Link.svelte';

	const year = new Date().getFullYear();

	const attributes = { 'stroke-width': 1.5, width: 18, height: 18 };
</script>

<footer
	class="max-w-screen-lg mx-auto border-t border-t-slate-100 dark:border-slate-700 relative text-slate-500 dark:text-slate-300 text-sm p-8 flex flex-row justify-around items-center"
>
	<p>
		Copyright &copy; {year},
		<Link href="https://iamsebastian.dev" target="_blank" title="Creator">
			Sebastian Heinz
		</Link>
	</p>
	<div class="flex flex-row">
		<Link
			href="https://twitter.com/iamsebastiandev"
			target="_blank"
			title="Twitter"
		>
			<Pangol name="twitter" classes="px-4" {attributes} />
		</Link>
		<Link
			href="https://github.com/iamsebastiandev"
			target="_blank"
			title="Github"
		>
			<Pangol name="github" classes="px-4" {attributes} />
		</Link>
	</div>

	<p>
		Built with
		<Link href="https://kit.svelte.dev" target="_blank" title="SvelteKit"
			>SvelteKit</Link
		> &
		<Link href="https://tailwindcss.com" target="_blank" title="TailwindCSS"
			>Tailwind</Link
		> 😍 🚀
	</p>
</footer>
