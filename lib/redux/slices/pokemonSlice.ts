import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonStateType = {
	list: PokemonDetailsType[];
};

const initialPokemonState: PokemonStateType = {
	list: [],
};

const pokemonSlice = createSlice({
	name: 'pokemon',

	initialState: initialPokemonState,

	reducers: {
		addPokemonAction: (state, action: PayloadAction<PokemonDetailsType[]>) => {
			state.list = state.list.concat(action.payload);
		},
	},
});

export default pokemonSlice;
