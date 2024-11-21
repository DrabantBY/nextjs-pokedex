'use client';

import PokemonList from './PokemonList';
import Nothing from '@/ui/Nothing';
import Spinner from '@/ui/Spinner';
import useScroll from '@/lib/hooks/useScroll';
import useFavorite from '@/lib/hooks/useFavorite';

const Pokemon = () => {
	const { ref, pokemon, next } = useScroll();
	console.log('render pokemon list');

	const toggleFavoritePokemon = useFavorite();

	return (
		<>
			{pokemon.length === 0 && !next ? <Nothing /> : null}
			{pokemon.length > 0 ? (
				<PokemonList pokemon={pokemon} toggle={toggleFavoritePokemon} />
			) : null}
			{next ? (
				<div ref={ref} className="mb-4 grow">
					<Spinner />
				</div>
			) : null}
		</>
	);
};

export default Pokemon;
