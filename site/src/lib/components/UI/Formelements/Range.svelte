<script lang="ts">
    export let value: number;
    export let id: string;
</script>

<div
    class="font-comfortaa grid grid-cols-4 place-items-center justify-items-center gap-x-2 whitespace-nowrap px-4 py-2"
>
    <label class="col-span-full w-full py-2" for={id}>
        <slot />
    </label>
    <input
        {...$$restProps}
        class="col-span-3 flex h-8 w-full appearance-none flex-row items-center justify-center bg-transparent py-3 focus:outline-none"
        type="range"
        {id}
        name={id}
        bind:value
    />
    <span class="w-10 px-2 text-xs font-light">
        {value}px
    </span>
</div>

<style lang="postcss">
    input[type='range']::-webkit-slider-runnable-track {
        @apply h-2 w-full cursor-pointer rounded-md bg-slate-300;
    }

    input[type='range']:focus::-webkit-slider-runnable-track {
        @apply bg-pangol-100;
    }

    input[type='range']::-webkit-slider-thumb {
        @apply bg-pangol-500 -mt-1 h-4 w-4 cursor-pointer appearance-none rounded-full;
    }

    input[type='range']::-webkit-slider-thumb:hover {
        @apply ring-pangol-100 ring-4;
    }

    input[type='range']::-moz-range-track {
        @apply h-2 w-full cursor-pointer rounded-md bg-slate-300;
    }

    input[type='range']:focus::-moz-range-track {
        @apply bg-pangol-100;
    }

    input[type='range']::-moz-range-thumb {
        @apply bg-pangol-500 -mt-1 h-4 w-4 cursor-pointer appearance-none rounded-full;
    }

    input[type='range']::-moz-range-thumb:hover {
        @apply ring-pangol-100 ring-4;
    }
</style>
