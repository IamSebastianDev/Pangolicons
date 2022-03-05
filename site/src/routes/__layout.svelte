<script>
    import '../app.css';

    // Layout components
    import Navigation from '$lib/layouts/Navigation.svelte';
    import Footer from '$lib/layouts/Footer.svelte';
</script>

<Navigation />
<slot />
<Footer />
