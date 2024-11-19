'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store';

import type { ReactNode } from 'react';
import type { AppStore } from './store';

const StoreProvider = ({ children }: { children: ReactNode }) => {
	const storeRef = useRef<AppStore>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
