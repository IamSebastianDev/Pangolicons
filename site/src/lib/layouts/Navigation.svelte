<script lang="ts">
    import { Internal } from '$lib/components/UI/Links';
    import { Pangolin, VerticalMore } from 'svelte-pangolicons';
    import { Themeselector, Drawer, Navlist } from '$lib/components/Nav';
    import { showDrawer } from '$lib/stores/navigation.store';
</script>

<nav
    class="mx-auto mb-4 flex max-w-screen-lg items-center border-b border-b-zinc-200 p-3 text-lg dark:border-b-zinc-700"
>
    <Internal href="/" class="hover:text-pangol-500 link mr-auto">
        <Pangolin class="mr-2" size={18} /> Pangolicons
    </Internal>
    <Navlist class="hidden flex-row space-x-6 sm:flex" />
    <button class="squared-full squared sm:hidden" on:click={() => showDrawer.set(true)}>
        <VerticalMore size={18} />
    </button>
    <Themeselector />
    <Drawer />
</nav>
