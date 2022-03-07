<script lang="ts">
    export let id: string;
    export let value: string;
</script>

<div
    class="font-comfortaa grid grid-cols-4 place-items-center justify-items-center gap-x-2 whitespace-nowrap px-4 py-2"
>
    <label class="col-span-full w-full py-2" for={id}>
        <slot />
    </label>
    <input
        class="focus-within:text-pangol-500 col-span-3 flex h-10 w-full flex-row items-center justify-center rounded-lg border border-zinc-300 bg-transparent bg-zinc-100 px-4 py-2 leading-none text-zinc-500 outline-none placeholder:text-zinc-500 focus-within:ring-1 focus:text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 focus:dark:text-zinc-300"
        type="text"
        id="{id}-text"
        name="{id}-text"
        bind:value
    />
    <label
        class="grid place-items-center overflow-hidden rounded-lg border "
        style:border={value}
        for="{id}-value"
    >
        <input class="-m-2 h-14 w-14" type="color" id="{id}-value" bind:value />
    </label>
</div>
