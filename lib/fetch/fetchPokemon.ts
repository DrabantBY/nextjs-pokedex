import mapDetails from '../utils/mapDetails';

import type {
	PokemonDetailsResponseType,
	PokemonUrlNameResponseType,
} from '@/types/pokemonResponseTypes';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

const POKEMON_URL = `${process.env.BASE_URL}pokemon/`;

export const getUrlList = async (
	url: string = POKEMON_URL
): Promise<{
	next: string | null;
	urls: string[];
}> => {
	const response = await fetch(url);

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
	const response = await fetch(`${url || POKEMON_URL}${slug}`);

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
	list: PokemonDetailsType[];
}> => {
	const { next, urls } = await getUrlList(url);

	const list = await Promise.all(urls.map((url) => getPokemonDetails(url, '')));

	return { list, next };
};
