import { configureStore } from '@reduxjs/toolkit';
import { filterReducer, pokemonReducer } from './reducers';

export const makeStore = () => {
	const store = configureStore({
		reducer: {
			pokemon: pokemonReducer,
			filters: filterReducer,
		},
	});

	return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
