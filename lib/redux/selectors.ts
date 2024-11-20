import { createSelector } from '@reduxjs/toolkit';
import filterPokemon from '@/lib/utils/filterPokemon';
import type { RootState } from './store';

export const selectFavorites = (state: RootState) => state.favorites.pokemon;
export const selectPokemon = (state: RootState) => state.pokemon.list;
export const selectFilterParams = (state: RootState) => state.filters;
export const selectFilterPokemon = createSelector(
	[selectPokemon, selectFilterParams],
	filterPokemon
);
