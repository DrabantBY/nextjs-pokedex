import { PokemonDetailsType } from '@/app/types/pokemonTypes';
import type {
	PokemonDetailsResponseType,
	PokemonUrlNameResponseType,
} from '@/app/types/pokemonResponseTypes';

const getUrlList = async (): Promise<string[]> => {
	const response = await fetch(process.env.BASE_URL ?? '', {
		cache: 'force-cache',
	});

	const { results }: PokemonUrlNameResponseType = await response.json();

	return results.map(({ url }) => url);
};

export const getPokemonDetails = async (
	url: string,
	id?: number
): Promise<PokemonDetailsType> => {
	const response = await fetch(`${url || process.env.BASE_URL}${id ?? ''}`, {
		cache: 'force-cache',
	});

	const { stats, types, ...common }: PokemonDetailsResponseType =
		await response.json();

	const param = stats.map(({ base_stat, stat }) => ({
		value: base_stat,
		name: stat.name,
	}));

	const kinds = types.map(({ type }) => type.name);

	return { ...common, kinds, param };
};

export const getPokemonList = async (): Promise<PokemonDetailsType[]> => {
	const urls = await getUrlList();

	const pokemon = await Promise.all(urls.map((url) => getPokemonDetails(url)));

	return pokemon;
};
