<script lang="ts">
    import { Rainbow, SunSmall, MoonStylized, Display } from 'svelte-pangolicons';
    import { clickOutside } from '$lib/scripts/clickOutside.util';
    import { theme } from '$lib/stores/theme.store';
    import Themebutton from './Themebutton.svelte';

    let element;
    let showSelector: boolean = false;

    const handleThemeSelect = (key: string) => {
        theme.dispatch({ type: key });
        showSelector = false;
    };

    const themeIcons = { system: Display, dark: MoonStylized, light: SunSmall, colourful: Rainbow };
</script>

<div
    use:clickOutside
    on:clickoutside={() => (showSelector = false)}
    class="relative ml-5 border-l border-l-zinc-200 pl-4 dark:border-l-zinc-700"
    bind:this={element}
>
    <button class="squared squared-full" on:click={() => (showSelector = !showSelector)}>
        <svelte:component this={themeIcons[$theme.status]} size={18} />
    </button>
    {#if showSelector}
        <div
            class="absolute right-0 top-16 flex flex-col overflow-hidden rounded-lg border border-zinc-500 bg-white dark:bg-zinc-900 lg:-right-1/2"
        >
            <ul>
                {#each Object.entries(themeIcons) as [key, component]}
                    <Themebutton on:click={() => handleThemeSelect(key)} {key}>
                        <svelte:component this={component} size={18} class="mr-2" />
                        {key}
                    </Themebutton>
                {/each}
            </ul>
        </div>
    {/if}
</div>
