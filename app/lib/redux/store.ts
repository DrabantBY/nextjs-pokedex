import { configureStore } from '@reduxjs/toolkit';
import { favoritesReducer } from './reducers';

export const makeStore = () => {
	const store = configureStore({
		reducer: { favorites: favoritesReducer },
	});
	return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
