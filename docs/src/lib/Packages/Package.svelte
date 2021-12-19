<script>
	import ButtonLink from '../UI/ButtonLink.svelte';
	import Card from '../UI/Card.svelte';
	import Pangol from '../UI/Pangol.svelte';
	import Icon from '../UI/Icon.svelte';

	export let pkg;
</script>

<Card classes="px-10 shadow-md">
	<div
		class="flex flex-row justify-around items-center w-full shrink-0 h-s20"
	>
		{#if pkg.name !== 'pangolicons'}
			<img
				class="w-1/2 h-1/2"
				src="/assets/images/packageLogos/{pkg.name}.svg"
				alt="package-logo"
			/>
			<Icon name="plus" attributes={{ 'stroke-width': 4 }} />
		{/if}
		<Icon name="pangolin" attributes={{ width: '50%', height: '50%' }} />
	</div>
	<div class="text-center my-2 text-slate-700 dark:text-white w-full mb-auto">
		<h1 class="font-comfortaa font-semibold text-3xl py-3 text-pangol-500 ">
			{pkg.name}
		</h1>
		<hr class="w-full border-pangol-500" />
		<p class="font-open py-3">
			{pkg.description}
		</p>
	</div>
	<div class="flex flex-row text-slate-700 dark:text-white mt-4">
		<ButtonLink href="/docs/{pkg.name}" title={pkg.name}>
			<Pangol name="clipboardNotes">Docs</Pangol>
		</ButtonLink>
		<ButtonLink
			href="https://github.com/iamsebastiandev/pangolicons/packages"
			title={pkg.name}
		>
			<Pangol name="code">Source</Pangol>
		</ButtonLink>
	</div>
</Card>
