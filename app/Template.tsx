import Header from '@/ui/Header';
import StoreProvider from '@/lib/redux/StoreProvider';
import { getPokemonList } from '@/lib/fetch/fetchPokemon';
import type { ReactNode } from 'react';

const Template = async ({ children }: { children: ReactNode }) => {
	const response = await getPokemonList();

	return (
		<StoreProvider {...response}>
			<div className="min-h-screen flex flex-col">
				<Header />
				<main className="flex flex-col grow">{children}</main>
			</div>
		</StoreProvider>
	);
};

export default Template;
