<script>
	import { pokemon } from '$lib/pokemon-api-client';
</script>

<svelte:head>
	<title>Pokemanz!</title>
</svelte:head>

<div class="">
	<h1 class="underline">Pokemon!</h1>

	{#each $pokemon as pokeman}
		<!-- <Pokemon pokeboi={pokemon} /> -->
		<div class="Card-Container">
			<div class="Card-Title">
				<p>{pokeman.name}</p>
			</div>
			<div class="Card-Image" />
			<div class="Card-Content m-5 p-5 w-36 h-48 shadow-inner border" />
			<div class="Card-Extra-Info" />
		</div>
	{/each}
</div>

<style>
</style>
