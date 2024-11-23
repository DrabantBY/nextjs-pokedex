import { createSelector } from '@reduxjs/toolkit';
import { pokemonEntities } from './slices/pokemonSlice';
import filterPokemon from '@/lib/utils/filterPokemon';
import type { RootState } from './store';

const { selectAll } = pokemonEntities.getSelectors<RootState>(
	(state) => state.pokemon
);

export const selectFavorite = createSelector(selectAll, (pokemon) =>
	pokemon.filter(({ favorite }) => favorite)
);

export const selectFilter = (state: RootState) => state.filters;

export const selectPokemon = createSelector(
	selectAll,
	selectFilter,
	filterPokemon
);

export const selectNext = (state: RootState) => state.pokemon.next;
