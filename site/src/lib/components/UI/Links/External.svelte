<script lang="ts">
    /**
     * A external link component. This component sets most attributes used by a regular
     * external link component by default.
     */

    /**
     * @type { Target }
     * The target attribute of the link. Defaults to "`_blank`".
     */

    export let target: Target = '_blank';

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

<a {href} rel="noreferrer noopener" {target} class={className} {title}>
    <slot />
</a>
