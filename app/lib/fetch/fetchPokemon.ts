import mapDetails from '../utils/mapDetails';

import type {
	PokemonDetailsResponseType,
	PokemonUrlNameResponseType,
} from '@/app/types/pokemonResponseTypes';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

const getUrlList = async (): Promise<string[]> => {
	const response = await fetch(`${process.env.BASE_URL}pokemon/`, {
		cache: 'force-cache',
	});

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const { results }: PokemonUrlNameResponseType = await response.json();

	return results.map(({ url }) => url);
};

export const getPokemonDetails = async (
	url: string,
	slug: string | number
): Promise<PokemonDetailsType> => {
	const response = await fetch(
		`${url || `${process.env.BASE_URL}pokemon/`}${slug}`,
		{
			cache: 'force-cache',
		}
	);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const pokemon: PokemonDetailsResponseType = await response.json();

	return mapDetails(pokemon);
};

export const getPokemonList = async (): Promise<PokemonDetailsType[]> => {
	const urls = await getUrlList();

	const pokemon = await Promise.all(
		urls.map((url) => getPokemonDetails(url, ''))
	);

	return pokemon;
};
