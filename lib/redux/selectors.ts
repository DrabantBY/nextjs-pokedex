import { createSelector } from '@reduxjs/toolkit';
import filterPokemon from '@/lib/utils/filterPokemon';
import type { RootState } from './store';

export const selectPokemon = (state: RootState) => state.pokemon.list;
export const selectNext = (state: RootState) => state.pokemon.next;
export const selectFilterParams = (state: RootState) => state.filters;

export const selectFilterPokemon = createSelector(
	selectPokemon,
	selectFilterParams,
	filterPokemon
);

export const selectFavoritesPokemon = createSelector(selectPokemon, (pokemon) =>
	pokemon.filter(({ favorite }) => favorite)
);
