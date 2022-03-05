<script lang="ts">
    import { icons } from '$lib/stores/icons.store';
    import { X, Search } from 'svelte-pangolicons';

    let element: HTMLElement;
    let hasFocus: boolean;
    const handleFocus = (ev) => {
        switch (ev.type) {
            case 'keydown':
                if (ev.key === '/') {
                    ev.preventDefault();
                    element.focus();
                    window.scrollTo({ top: 0 });
                }
                break;
            case 'focus':
                hasFocus = true;
                break;
            case 'blur':
                hasFocus = false;
                break;
        }
    };
</script>

<svelte:window on:keydown={handleFocus} />

<div
    class="focus-within:text-pangol-500 flex w-full flex-row justify-center rounded-lg border border-zinc-300 bg-zinc-100 px-4 py-2 text-zinc-500 focus-within:ring-1 dark:border-zinc-700 dark:bg-zinc-800 "
>
    <Search class="squared shrink-0" />
    <label for="search" class="hidden">Search for a icon.</label>
    <input
        id="search"
        type="text"
        bind:this={element}
        bind:value={$icons.search}
        on:blur={handleFocus}
        on:focus={handleFocus}
        class="w-full items-center bg-transparent px-4 leading-none outline-none placeholder:text-zinc-500 focus:text-zinc-700 focus:dark:text-zinc-300"
        placeholder="Search {$icons.count} Icons. {!hasFocus ? "Press '/' to focus." : ''}"
        autocomplete="off"
    />
    {#if $icons.search !== ''}
        <button class="squared squared-full" on:click={() => icons.dispatch({ type: 'reset' })}>
            <X />
        </button>
    {/if}
</div>
