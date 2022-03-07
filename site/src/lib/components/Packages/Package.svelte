<script lang="ts">
    import { Github, ClipboardNotes } from 'svelte-pangolicons';
    import { Internal, External } from '$lib/components/UI/Links';

    export let name;
    export let version;
    export let description;
    export let links;
</script>

<div
    class="mx-auto mb-8 flex w-full flex-col items-center rounded-lg border border-zinc-500 p-8 text-center shadow-sm md:flex-row md:text-left"
>
    <img src="/assets/images/logos/{name}.png" alt="Package logo" class="max-w-xs md:w-1/3" />
    <div class="space-y-2 px-8 py-4">
        <h3 class="text-3xl font-semibold capitalize">
            {name}
            <External href={links.npm} class="text-pangol-500 ml-2 text-sm underline"
                >{version}</External
            >
        </h3>
        <p>{description}</p>
    </div>
    <div class="flex space-x-4 py-4 md:ml-auto md:flex-col md:space-x-0 md:space-y-2">
        <Internal href="/packages/{name}" class="btn">
            Docs <ClipboardNotes class="ml-auto" />
        </Internal>
        <External
            href="https://github.com/IamSebastianDev/Pangolicons/tree/master/packages/{name}"
            class="btn"
        >
            Source <Github class="ml-4" />
        </External>
    </div>
</div>
