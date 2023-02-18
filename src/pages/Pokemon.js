import React, { useState, useEffect } from 'react';
import { getPokemon } from '../api/pokemon.js';
import { useLocation } from 'react-router-dom';

const Pokemon = () => {
	const location = useLocation();

	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		getPokemon(location.pathname).then(data => {
			setPokemon(data);
		});
	}, [location.pathname]);

	const addIntoCache = (cacheName, pokemons, response) => {
		const data = new Response(JSON.stringify(response));

		if ('caches' in window) {
			caches.open(cacheName).then(cache => {
				cache.put(pokemons, data);
			});
		}
	};
	addIntoCache(
		'Pokemon data',
		'https://localhost:3000/pokemon' + location.pathname,
		pokemon
	);

	const { id, name, height, weight, base_experience } = pokemon;

	return (
		
		<div>
			<h1 className='poke-page-name'>{name}</h1>
			<div className='detail-page'>
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt='pokemon picture' />
			</div>
			

			<div className='poke-stats'>
				<h3 className='stats-h3'>Stats:</h3>
				<div className='Stats_Data'>
					<span>Height: {height} </span>|
					<span>Weight: {weight} </span>|
					<span>Base XP:{base_experience}</span>|
				</div>
			</div>

			<div className='Abilities'>
				<h3 className='abilities-h3'>Abilities:</h3>
				<div className='Abilities_Data'>
					{pokemon.abilities &&
						pokemon.abilities.map((ability, index) => {
							return (
								<p key={index}>{ability['ability']['name']}</p>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default Pokemon;
