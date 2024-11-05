import type { RootState } from './store';

export const selectFavorites = (state: RootState) => state.favorites.pokemon;

export const selectPokemon = (state: RootState) => state.pokemon.list;
