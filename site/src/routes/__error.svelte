<script context="module">
  export const load = ({ error, status }) => {
    return {
      props: {
        error,
        status,
      },
    };
  };
</script>

<script lang="ts">
  import { Ghost } from "svelte-pangolicons";
  export let error: Error;
  export let status: string;

  // @todo: Add a link back to the homepage once a link button component exists
</script>

<svelte:head>
  <title>Pangolicons | {status}</title>
</svelte:head>

<section
  id="error"
  class="relative my-24 mx-auto flex max-w-sm flex-col items-center justify-center"
>
  <div class="flex items-center pb-4">
    <Ghost class="stroke-pangol-500 h-24 w-24" />
    <h1 id="error-code" class="px-3 text-8xl font-semibold">{status}</h1>
  </div>
  <p id="error-message" class="text-center text-lg text-zinc-500">Oh no! Something went wrong:</p>
  <p class="text-center text-lg text-zinc-500">
    <strong>{error.message}</strong>
  </p>
</section>
