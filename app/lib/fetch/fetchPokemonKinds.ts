import type { PokemonUrlNameResponseType } from '@/app/types/pokemonResponseTypes';

export const getKindList = async (): Promise<string[]> => {
	const response = await fetch(`${process.env.BASE_URL}type/?limit=21`, {
		cache: 'force-cache',
	});

	const { results } = (await response.json()) as PokemonUrlNameResponseType;

	return results.map(({ name }) => name);
};
