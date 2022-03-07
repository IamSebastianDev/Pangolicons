<script lang="ts">
    import { joinClassNames as cls } from '$lib/scripts/joinClassNames.util';
    import { theme } from '$lib/stores/theme.store';

    export let key: string;
</script>

<li
    class={cls(
        key === 'colourful' && $theme.fancy ? 'text-red-500' : '',
        $theme.theme === key ? 'text-blue-500' : ''
    )}
>
    <button
        on:click
        class="flex w-full items-center py-1 pl-2 pr-8 text-base capitalize hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
        <slot />
    </button>
</li>
