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
			if (state.list.at(-1)?.id !== action.payload.at(-1)?.id) {
				state.list = state.list.concat(action.payload);
			}
		},

		setFavoritePokemonAction: (state, action: PayloadAction<number>) => {
			state.list = state.list.map((pokemon) => {
				if (pokemon.id === action.payload) {
					pokemon.favorite = true;
				}

				return pokemon;
			});
		},

		remFavoritePokemonAction: (state, action: PayloadAction<number>) => {
			state.list = state.list.map((pokemon) => {
				if (pokemon.id === action.payload) {
					pokemon.favorite = false;
				}

				return pokemon;
			});
		},
	},
});

export default pokemonSlice;
