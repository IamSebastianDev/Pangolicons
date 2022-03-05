<script>
    import { External } from '../UI/Links';
    import { X, Github, Twitter } from 'svelte-pangolicons';
    import { Navlist } from './';
    import { showDrawer } from '$lib/stores/navigation.store';
    import { fly } from 'svelte/transition';
</script>

{#if $showDrawer}
    <aside
        transition:fly={{ x: -500 }}
        id="nav-drawer"
        class="bg-pangol-500 fixed inset-0 flex flex-col items-center justify-center text-white"
    >
        <div class="absolute top-0 right-0 p-4">
            <button on:click={() => showDrawer.set(false)}><X /></button>
        </div>
        <Navlist class="flex flex-col items-center space-y-8 text-3xl" size={0} />
        <div class="absolute bottom-8 flex items-center justify-center space-x-8">
            <External
                href="https://github.com/iamsebatiandev/pangolicons"
                class="squared"
                title="Link to the Github repo."
            >
                <Github />
            </External>
            <External
                href="https://twitter.com/iamsebatiandev"
                class="squared"
                title="Link to twitter"
            >
                <Twitter />
            </External>
        </div>
    </aside>
{/if}
