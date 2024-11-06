import mapDetails from '../utils/mapDetails';

import type {
	PokemonDetailsResponseType,
	PokemonUrlNameResponseType,
} from '@/app/types/pokemonResponseTypes';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

const POKEMON_URL = `${process.env.BASE_URL}pokemon/`;

export const getUrlList = async (
	url: string = POKEMON_URL
): Promise<{
	next: string | null;
	urls: string[];
}> => {
	const response = await fetch(url, {
		cache: 'force-cache',
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const { next, results }: PokemonUrlNameResponseType = await response.json();

	return { next, urls: results.map(({ url }) => url) };
};

export const getPokemonDetails = async (
	url: string,
	slug: string | number
): Promise<PokemonDetailsType> => {
	const response = await fetch(`${url || POKEMON_URL}${slug}`, {
		cache: 'force-cache',
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const pokemon: PokemonDetailsResponseType = await response.json();

	return mapDetails(pokemon);
};

export const getPokemonList = async (
	url: string = POKEMON_URL
): Promise<{
	next: string | null;
	pokemon: PokemonDetailsType[];
}> => {
	const { next, urls } = await getUrlList(url);

	const pokemon = await Promise.all(
		urls.map((url) => getPokemonDetails(url, ''))
	);

	return { pokemon, next };
};
