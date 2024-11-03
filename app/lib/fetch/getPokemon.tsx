import type {
	PokemonResponseType,
	PokemonType,
} from '@/app/types/pokemonTypes';

export const getPokemonList = async (): Promise<PokemonType[]> => {
	const response = await fetch(`${process.env.BASE_URL}/pokemon`);

	const { results }: PokemonResponseType = await response.json();

	return results;
};
