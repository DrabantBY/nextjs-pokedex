import favoritesSlice from './slices/favoritesSlice';
import { pokemonSlice } from './slices/pokemonSlice';

export const { addFavoriteAction, removeFavoriteAction } =
	favoritesSlice.actions;

export const { addPokemonAction } = pokemonSlice.actions;
