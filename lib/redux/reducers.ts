import favoritesSlice from './slices/favoritesSlice';
import pokemonSlice from './slices/pokemonSlice';
import filterParamsSlice from './slices/filterParamsSlice';

export const favoritesReducer = favoritesSlice.reducer;

export const pokemonReducer = pokemonSlice.reducer;

export const filterParamsReducer = filterParamsSlice.reducer;
