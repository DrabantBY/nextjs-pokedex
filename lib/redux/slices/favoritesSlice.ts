import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonStateType = {
	pokemon: PokemonDetailsType[];
};

const initialFavoriteState: PokemonStateType = {
	pokemon: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',

	initialState: initialFavoriteState,

	reducers: {
		addFavoriteAction: (state, action: PayloadAction<PokemonDetailsType>) => {
			state.pokemon = [...state.pokemon, action.payload];
		},

		removeFavoriteAction: (
			state,
			action: PayloadAction<PokemonDetailsType>
		) => {
			state.pokemon = state.pokemon.filter(
				(character) => character.name !== action.payload.name
			);
		},
	},
});

export default favoritesSlice;
