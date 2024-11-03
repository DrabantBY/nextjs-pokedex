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
		addToFavorites: (state, action: PayloadAction<PokemonType>) => {
			state.pokemon = [...state.pokemon, action.payload];
		},

		removeFromFavorites: (state, action: PayloadAction<PokemonType>) => {
			state.pokemon = state.pokemon.filter(
				(character) => character.name !== action.payload.name
			);
		},
	},
});

// export default favoritesSlice.reducer;
