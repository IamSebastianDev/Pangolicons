<script lang="ts">
    import { Github, Twitter } from 'svelte-pangolicons';
    import { External } from '$lib/components/UI/Links';
    interface Attrs {
        size?: number;
        strokeWidth?: number;
    }

    const year: number = new Date().getFullYear();
    const attrs: Attrs = {
        size: 20,
        strokeWidth: 1.5,
    };
</script>

<footer
    class="mx-auto mt-4 flex max-w-screen-lg flex-col items-center justify-around space-y-2 border-t border-t-zinc-200 py-4 text-sm dark:border-t-zinc-700 dark:text-zinc-500 sm:flex-row sm:space-y-0 sm:py-2"
>
    <div>
        &copy; 2021 - {year},
        <External
            class="link hover:text-zinc-800 dark:hover:text-white"
            href="https://iamsebastian.dev"
        >
            Sebastian Heinz
        </External>
    </div>
    <div class="flex items-center justify-center">
        <External
            href="https://github.com/iamsebatiandev/pangolicons"
            class="squared"
            title="Link to the Github repo."
        >
            <Github {...attrs} />
        </External>
        <External href="https://twitter.com/iamsebatiandev" class="squared" title="Link to twitter">
            <Twitter {...attrs} />
        </External>
    </div>
    <div>
        Built with
        <External
            href="https://kit.svelte.dev"
            class="link hover:text-zinc-800 dark:hover:text-white"
        >
            SvelteKit
        </External> & <External
            class="link hover:text-zinc-800 dark:hover:text-white"
            href="https://tailwindcss.com"
        >
            Tailwind
        </External> 😍 🚀
    </div>
</footer>
