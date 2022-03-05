<script>
    import { ClipboardNotes, Parcel, Github } from 'svelte-pangolicons';
    import { Internal, External } from '$lib/components/UI/Links';
    let className;
    export { className as class };
    export let size = 18;
</script>

<ul class={className}>
    <li>
        <Internal class="hover:text-pangol-500 link" href="/packages/pangolicons">
            Docs <ClipboardNotes class="ml-2" {size} />
        </Internal>
    </li>
    <li>
        <Internal class="hover:text-pangol-500 link" href="/packages">
            Packages <Parcel class="ml-2" {size} />
        </Internal>
    </li>
    <li>
        <External
            class="hover:text-pangol-500 link"
            href="https://github.com/iamsebastiandev/pangolicons"
        >
            Github <Github class="ml-2" {size} />
        </External>
    </li>
</ul>
