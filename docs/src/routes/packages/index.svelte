<script>
    export let packages;

    import Section from '$lib/components/UI/Section.svelte';
    import { External } from '$lib/components/UI/Links';
    import { PkgCard } from '$lib/components/Packages';
</script>

<Section id="packages-list">
    <div class="font-comfortaa my-8 space-y-4 text-center">
        <h1 class="text-3xl font-semibold">Packages</h1>
        <p class="mx-auto max-w-xl">
            Below is the (hopefully evergrowing) list of available packages. If you'd like to
            contribute, check out the <External
                class="underline"
                href="https://github.com/iamsebastiandev/pangolicons">Monorepo on Github.</External
            >
        </p>
    </div>
    {#each packages as { name, description, version, links }}
        <PkgCard {name} {description} {version} {links} />
    {/each}
</Section>
