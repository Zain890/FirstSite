import { writable } from 'svelte/store';
import axios, { Axios } from 'axios';

let client = Axios;
export const pokemon = writable([]);

export async function fetchPokemon() {
	const url = `https://pokeapi.co/api/v2/pokemon?offset=150&limit=1000`;

	// const res = await fetch(url).then((res) => {
	//   return res;
	// });

	await axios.get(url).then((res) => {
		const results = res.data.results;
		console.log(res.data);
		const loadedPokemon = results.map((data: any, index: any) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
					index + 1
				}.png`
			};
		});
		pokemon.set(loadedPokemon);
	});

	// const res = await axios.get(url);

	// const results = res.data.results;
	// const loadedPokemon = results.map((data: any, index: any) => {
	// 	return {
	// 		name: data.name,
	// 		id: index + 1,
	// 		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
	// 			index + 1
	// 		}.png`
	// 	};
	// });
	// pokemon.set(loadedPokemon);
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
