<script lang="ts">
    /**
     * A Internal link component. This component sets most attributes used by a regular
     * internal link component by default.
     */

    /**
     * @type { string }
     * The href attribute of the link.
     */

    export let href: string;

    /**
     * @type { string }
     * The title of the link.
     */

    export let title: string = '';

    /**
     * @type { string }
     * A string that is appended to the existing class attribute.
     */

    let className: string = 'link';
    export { className as class };
</script>

<a {href} target="_self" class={className} {title}>
    <slot />
</a>
