<script>
    import { pokemon } from "$lib/pokemon-api-client";
    console.log($pokemon)

</script>

<svelte:head>
    <title>Pokemanz!</title>
</svelte:head>

<body>
    <h1 class="underline">Pokemon!</h1>
</body>

{#each $pokemon as pokeman}
<p>{pokeman.name}</p>
{/each}



<style>

</style>