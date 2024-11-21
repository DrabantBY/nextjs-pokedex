import type { PokemonDetailsType } from '@/types/pokemonTypes';
import type { PokemonDetailsResponseType } from '@/types/pokemonResponseTypes';

const mapDetails = ({
	types,
	sprites,
	stats,
	...other
}: PokemonDetailsResponseType): PokemonDetailsType => {
	const kinds = types.map(({ type }) => type.name);

	const src = sprites.other['official-artwork'].front_default;

	const data = stats.map(({ base_stat, stat }) => ({
		[stat.name]: base_stat,
	}));

	const { id, name, height, weight } = other;

	return { id, name, height, weight, src, data, kinds };
};

export default mapDetails;
