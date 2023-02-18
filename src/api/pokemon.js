const url = 'https://pokeapi.co/api/v2';

export const getPokemon = pathName => {
	return fetch(`${url}${pathName}`).then(response => response.json());
};
