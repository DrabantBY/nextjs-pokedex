import { createSlice } from '@reduxjs/toolkit';
import fetchPokemonList from '@/lib/redux/thunks';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonStateType = {
	list: PokemonDetailsType[];
	next: string | null;
};

const initialPokemonState: PokemonStateType = {
	list: [],
	next: null,
};

const pokemonSlice = createSlice({
	name: 'pokemon',

	initialState: initialPokemonState,

	reducers: {
		setInitialPokemonAction: (
			state,
			action: PayloadAction<PokemonStateType>
		) => {
			state = Object.assign(state, action.payload);
		},

		addPokemonAction: (state, action: PayloadAction<PokemonDetailsType[]>) => {
			state.list = state.list.concat(action.payload);
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

	extraReducers: (builder) => {
		builder.addCase(
			fetchPokemonList.fulfilled,
			(state, action: PayloadAction<PokemonStateType>) => {
				state.list = state.list.concat(action.payload.list);
				state.next = action.payload.next;
			}
		);
	},
});

export default pokemonSlice;
