import { configureStore } from '@reduxjs/toolkit';
import {
	favoritesReducer,
	filterParamsReducer,
	pokemonReducer,
} from './reducers';

export const makeStore = () => {
	const store = configureStore({
		reducer: {
			favorites: favoritesReducer,
			pokemon: pokemonReducer,
			filters: filterParamsReducer,
		},
	});

	return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
