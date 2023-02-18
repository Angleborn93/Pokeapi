import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = pokemon => {
	return (
		<>
			<Link to={{ pathname: `/pokemon/${pokemon.name}` }}>
				<div className='card-wrapper'>
					<img
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id + 1}.png`} alt='pokemon picture' />
					<h1>{pokemon.name}</h1>
				</div>
			</Link>
		</>
	);
};

export default PokemonCard;
