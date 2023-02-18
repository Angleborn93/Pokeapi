import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard.js';
import { getPokemonList } from '../api/pokemonList.js';

const AllPokemon = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		getPokemonList().then(data => {
			setPokemons(data);
		});
	}, []);
	const addIntoCache = (cacheName, pokemons, response) => {
		const data = new Response(JSON.stringify(response));

		if ('caches' in window) {
			caches.open(cacheName).then(cache => {
				cache.put(pokemons, data);
			});
		}
	};
	addIntoCache('Pokemon List', 'https://localhost:3000/', pokemons.results);

	return (
		<div className='card-list'>
			{pokemons['results'] &&
				pokemons['results'].map((pokemon, index) => {
					return <PokemonCard key={index} {...pokemon} id={index} />;
				})}
		</div>
	);
};

export default AllPokemon;
