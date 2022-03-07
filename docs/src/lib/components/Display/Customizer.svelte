<script lang="ts">
    import { slide } from 'svelte/transition';
    import { size, strokeWidth, color } from '$lib/stores/attributes.store';
    import { joinClassNames as cls } from '$lib/scripts/joinClassNames.util';
    import { ChevronDown } from 'svelte-pangolicons';
    import { Range, Color } from '$lib/components/UI/Formelements';

    let showCustomizer = false;
    const toggleCustomizer = () => (showCustomizer = !showCustomizer);
</script>

<div class="mt-7 flex items-center justify-between px-5">
    <h3 class="text-lg">Customize the icons:</h3>
    <button class="squared squared-full" on:click={toggleCustomizer}>
        <ChevronDown class={cls('transform', showCustomizer ? 'rotate-180' : '')} />
    </button>
</div>
{#if showCustomizer}
    <div transition:slide={{ duration: 200 }} class="mt-7 grid gap-x-4 py-2 sm:grid-cols-3">
        <Range bind:value={$size} id="icon-size" min="8" max="80" step="4">Size:</Range>
        <Range bind:value={$strokeWidth} id="icon-size" min="0.5" max="4" step="0.25">
            Stroke-width:
        </Range>
        <Color id="icon-color" bind:value={$color}>Color:</Color>
    </div>
{/if}
