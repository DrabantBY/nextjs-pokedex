import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList } from '../fetch/fetchPokemon';

const fetchPokemonList = createAsyncThunk(
	'pokemon/fetchPokemonList',
	async (url?: string) => {
		const { next, pokemon } = await getPokemonList(url);
		return { next, pokemon };
	}
);

export default fetchPokemonList;
