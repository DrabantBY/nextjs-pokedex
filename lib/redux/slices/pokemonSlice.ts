import { createSlice } from '@reduxjs/toolkit';
import fetchPokemonList from '@/lib/redux/thunks';
import { createEntityAdapter } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetailsType, PokemonListType } from '@/types/pokemonTypes';

export const pokemonEntities = createEntityAdapter<PokemonDetailsType>();

const initialState = pokemonEntities.getInitialState({
	next: null as string | null,
});

const pokemonSlice = createSlice({
	name: 'pokemon',

	initialState,

	reducers: {
		setInitialPokemonAction: (
			state,
			action: PayloadAction<PokemonListType>
		) => {
			pokemonEntities.setAll(state, action.payload.list);
			state.next = action.payload.next;
		},

		setFavoritePokemonAction: pokemonEntities.updateOne,
	},

	extraReducers: (builder) => {
		builder.addCase(
			fetchPokemonList.fulfilled,
			(state, action: PayloadAction<PokemonListType>) => {
				pokemonEntities.addMany(state, action.payload.list);
				state.next = action.payload.next;
			}
		);
	},
});

export default pokemonSlice;
