import { PokemonDetailsType } from '@/app/types/pokemonTypes';
import { FilterParamsStateType } from '@/app/lib/redux/slices/filterParamsSlice';

const filterPokemon = (
	pokemon: PokemonDetailsType[],
	{ kind, name }: FilterParamsStateType
) => {
	if (pokemon.length === 0) {
		return pokemon;
	}

	return pokemon.filter(
		(character) =>
			character.name.includes(name) && character.kinds.toString().includes(kind)
	);
};

export default filterPokemon;
