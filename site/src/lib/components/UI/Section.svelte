<script lang="ts">
    import { joinClassNames as cls } from '$lib/scripts/joinClassNames.util';
    export let id: string;
    let className: string = '';
    export { className as class };
</script>

<section {id} class={cls('mx-auto flex w-full max-w-screen-lg flex-col px-4 lg:px-0', className)}>
    <slot />
</section>
