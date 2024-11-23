import filterSlice from './slices/filterSlice';
import pokemonSlice from './slices/pokemonSlice';

export const { setInitialPokemonAction, setFavoritePokemonAction } =
	pokemonSlice.actions;

export const { changeFilterAction, clearFilterAction } = filterSlice.actions;
