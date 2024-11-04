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
	pokemonId?: number
): Promise<PokemonDetailsType> => {
	const response = await fetch(
		`${url || process.env.BASE_URL}${pokemonId ?? ''}`,
		{
			cache: 'force-cache',
		}
	);

	const {
		stats,
		types,
		sprites,
		id,
		name,
		height,
		weight,
	}: PokemonDetailsResponseType = await response.json();

	const param = stats.map(({ base_stat, stat }) => ({
		value: base_stat,
		name: stat.name,
	}));

	const kinds = types.map(({ type }) => type.name);

	const src = sprites.other.dream_world.front_default;

	return {
		id,
		name,
		height,
		weight,
		kinds,
		param,
		src,
	};
};

export const getPokemonList = async (): Promise<PokemonDetailsType[]> => {
	const urls = await getUrlList();

	const pokemon = await Promise.all(urls.map((url) => getPokemonDetails(url)));

	return pokemon;
};
