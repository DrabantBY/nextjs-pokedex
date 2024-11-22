'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store';
import { setInitialPokemonAction } from './actions';
import type { ReactNode } from 'react';
import type { AppStore } from './store';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type StoreProviderPropsType = {
	children: ReactNode;
	next: string | null;
	list: PokemonDetailsType[];
};

const StoreProvider = ({
	children,
	...initialData
}: StoreProviderPropsType) => {
	const storeRef = useRef<AppStore>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
		storeRef.current.dispatch(setInitialPokemonAction(initialData));
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
