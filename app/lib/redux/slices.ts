import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokemonType } from '@/app/types/pokemonTypes';

type FavoritesPokemonStateType = {
	pokemon: PokemonType[];
};

const initialState: FavoritesPokemonStateType = {
	pokemon: [],
};

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addFavoriteAction: (state, action: PayloadAction<PokemonType>) => {
			state.pokemon = [...state.pokemon, action.payload];
		},

		removeFavoriteAction: (state, action: PayloadAction<PokemonType>) => {
			state.pokemon = state.pokemon.filter(
				(character) => character.name !== action.payload.name
			);
		},
	},
});
