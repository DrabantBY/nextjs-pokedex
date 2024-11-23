import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList } from '@/lib/fetch/fetchPokemon';

const fetchPokemonList = createAsyncThunk(
	'pokemon/fetchPokemonList',
	async (url?: string) => {
		const response = await getPokemonList(url);
		return response;
	}
);

export default fetchPokemonList;
