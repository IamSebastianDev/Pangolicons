<script>
    import { Pangolin, Download } from 'svelte-pangolicons';
    import { Internal, External } from '$lib/components/UI/Links';
    import { Section } from '$lib/components/UI';
</script>

<Section id="hero" class="font-comfortaa my-20 space-y-12 text-center">
    <h1 class="text-5xl md:text-8xl">
        Pangol<span class="text-pangol-500 font-bold">icons</span>
    </h1>
    <p class="max-w-lg self-center text-lg tracking-wide">
        A modern & minimal open source SVG Icon library. As cute & fierce as it's name suggests.
    </p>
    <div
        class="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0"
    >
        <Internal href="/packages/pangolicons" class="btn">
            Get started <Pangolin class="ml-2" size={20} />
        </Internal>
        <External href="https://github.com/iamsebastiandev/pangolicons/icons" class="btn">
            Download all <Download class="ml-2" size={20} />
        </External>
    </div>
</Section>
