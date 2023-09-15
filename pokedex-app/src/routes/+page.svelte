<script>
     /** @type {import('./$types').PageData} */
    import PokemanCard from "../components/pokemanCard.svelte";

    export let data;
    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if(searchTerm){
            // search the pokemon
            filteredPokemon = data.pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()) )
        }
        else{
            filteredPokemon = [...data.pokemon]
        }
    }

</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>

<input bind:value={searchTerm} class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" placeholder="Search a Pokemon">

<div class=" py-4 grid gap-4 md:grid-cols-2 grid-col-1">
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman = {pokeman} />
    {/each}
</div>
