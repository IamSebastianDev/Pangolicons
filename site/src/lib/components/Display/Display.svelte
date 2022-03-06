<script lang="ts">
    import { size, strokeWidth, color } from '$lib/stores/attributes.store';
    import { icons } from '$lib/stores/icons.store';
    import * as allIcons from 'svelte-pangolicons';
    import { Pangolicons } from 'pangolicons';

    import Iconcard from './Icon.svelte';

    $: filteredIcons = Pangolicons.search({ searchString: $icons.search }) || Pangolicons.icons;
</script>

<div
    class="my-7 grid grid-cols-2 place-items-center justify-items-center gap-7 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
>
    {#each Object.values(filteredIcons) as { name }, index (name)}
        <Iconcard {name} delay={index} color={$color}>
            <svelte:component
                this={allIcons[name[0].toUpperCase() + name.slice(1)]}
                size={$size}
                strokeWidth={$strokeWidth}
            />
        </Iconcard>
    {:else}
        <p class="text-2xl col-span-full mb-8 mt-14 font-thin tracking-wider">
            Found no icon matching "{$icons.search}"
        </p>
    {/each}
</div>
