import { FilterParamsStateType } from '@/lib/redux/slices/filterSlice';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

const filterPokemon = (
	pokemon: PokemonDetailsType[],
	{ kind, name }: FilterParamsStateType
) => {
	if (pokemon.length === 0) {
		return pokemon;
	}

	return pokemon.filter(
		(character) =>
			character.name.includes(name.toLowerCase()) &&
			character.kinds.toString().includes(kind)
	);
};

export default filterPokemon;
