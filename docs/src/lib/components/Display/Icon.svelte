<script lang="ts">
    import { browser } from '$app/env';
    import { onMount } from 'svelte';
    import { joinClassNames as cls } from '$lib/scripts/joinClassNames.util';
    import { theme } from '$lib/stores/theme.store';

    export let name: string;
    export let delay: number = 0;
    export let color: string;
    export let size: number;
    export let strokeWidth: number;

    let element;
    let isVisible: boolean = true;

    onMount(() => {
        if (!browser) return;

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    isVisible = entry.isIntersecting;
                });
            },
            { rootMargin: '50px 0px' }
        );

        observer.observe(element);
    });
</script>

<a
    bind:this={element}
    style="--animation-delay: {delay * 100}ms"
    style:color
    class={cls(
        'relative flex aspect-square h-full w-full flex-col items-center justify-center rounded-lg border border-zinc-300 px-4 py-6 hover:ring-1 dark:border-zinc-700',
        $theme.fancy && isVisible ? 'motion-safe:animate-rainbow' : ''
    )}
    href="/api/{name}?stroke={strokeWidth}&size={size}&color={color.replace('#', '')}"
    download="{name}.svg"
>
    <span class="absolute">
        <slot />
    </span>
    <p class="mt-auto  text-ellipsis whitespace-pre text-sm">{name}</p>
</a>
