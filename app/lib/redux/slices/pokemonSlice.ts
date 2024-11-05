import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonStateType = {
	list: PokemonDetailsType[];
};

const initialPokemonState: PokemonStateType = {
	list: [],
};

export const pokemonSlice = createSlice({
	name: 'pokemon',

	initialState: initialPokemonState,

	reducers: {
		addPokemonAction: (state, action: PayloadAction<PokemonDetailsType[]>) => {
			if (state.list.some((item) => item.id === action.payload[0].id)) {
				return;
			}
			state.list = state.list.concat(action.payload);
		},
	},
});
