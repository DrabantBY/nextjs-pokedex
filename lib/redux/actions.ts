import filterParamsSlice from './slices/filterParamsSlice';
import pokemonSlice from './slices/pokemonSlice';

export const {
	addPokemonAction,
	setFavoritePokemonAction,
	remFavoritePokemonAction,
} = pokemonSlice.actions;

export const { changeFilterAction, clearFilterAction } =
	filterParamsSlice.actions;
