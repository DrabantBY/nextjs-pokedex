'use client';

import { memo } from 'react';
import PokemonList from './PokemonList';
import Nothing from '@/ui/Nothing';
import Spinner from '@/ui/Spinner';
import useScroll from '@/lib/hooks/useScroll';
import useFavorite from '@/lib/hooks/useFavorite';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
	next: string | null;
};

const Pokemon = (props: PokemonPropsType) => {
	const { ref, pokemonList, url } = useScroll(props);
	console.log('render pokemon list');

	const toggleFavoritePokemon = useFavorite();

	return pokemonList.length === 0 ? (
		<Nothing />
	) : (
		<>
			<PokemonList pokemon={pokemonList} toggle={toggleFavoritePokemon} />
			<div ref={ref} className="mb-4">
				<Spinner />
			</div>
		</>
	);
};

export default memo(Pokemon);
