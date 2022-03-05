<script lang="ts">
    export let name: string;
</script>

<a
    class="relative flex aspect-square h-full w-full flex-col items-center justify-center rounded-lg border border-zinc-300 px-4 py-6 hover:ring-1 dark:border-zinc-700"
    href="/"
>
    <span class="absolute">
        <slot />
    </span>
    <p class="mt-auto text-ellipsis whitespace-pre text-sm ">{name}</p>
</a>
