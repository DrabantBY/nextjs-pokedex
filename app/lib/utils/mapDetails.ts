import type { PokemonDetailsType } from '@/app/types/pokemonTypes';
import type { PokemonDetailsResponseType } from '@/app/types/pokemonResponseTypes';

const mapDetails = ({
	types,
	sprites,
	stats,
	...other
}: PokemonDetailsResponseType): PokemonDetailsType => {
	const kinds = types.map(({ type }) => type.name);

	const src = sprites.other.dream_world.front_default;

	const param = stats.map(({ base_stat, stat }) => ({
		value: base_stat,
		name: stat.name,
	}));

	const { id, name, height, weight } = other;

	return { id, name, height, weight, src, param, kinds };
};

export default mapDetails;
