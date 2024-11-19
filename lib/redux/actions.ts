import favoritesSlice from './slices/favoritesSlice';
import filterParamsSlice from './slices/filterParamsSlice';
import pokemonSlice from './slices/pokemonSlice';

export const { addFavoriteAction, removeFavoriteAction } =
	favoritesSlice.actions;

export const { addPokemonAction } = pokemonSlice.actions;

export const { changeFilterAction, clearFilterAction } =
	filterParamsSlice.actions;
