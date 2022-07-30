import {writable} from "svelte/store";
import {Axios} from "axios";

let client = Axios;
export const pokemon = writable([]);

export async function fetchPokemon() {
  
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedPokemon = data.results.map((data:any, index:any) => {
      return {
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
      };
    })
    pokemon.set(loadedPokemon);
  }
fetchPokemon();

export default client;



// try {
      //   const response = await client.get('/',
      //   {
        //     params: {}
        //   });
        //   console.log(response);
  // } catch (error) {
    //   console.error(error);
    // }