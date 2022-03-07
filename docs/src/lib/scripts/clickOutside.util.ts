export const clickOutside = (node) => {
    const handleClick = (ev: Event) => {
        if (!node.contains(ev.target)) {
            node.dispatchEvent(new CustomEvent('clickoutside'));
        }
    };

    window.addEventListener('click', handleClick, true);

    return {
        destroy() {
            window.removeEventListener('click', handleClick, true);
        },
    };
};
