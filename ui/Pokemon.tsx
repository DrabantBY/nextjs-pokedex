'use client';

import PokemonList from './PokemonList';
import Nothing from '@/ui/Nothing';
import Spinner from '@/ui/Spinner';
import useScroll from '@/lib/hooks/useScroll';
import useFavorite from '@/lib/hooks/useFavorite';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectFilterPokemon, selectNext } from '@/lib/redux/selectors';

const Pokemon = () => {
	const pokemon = useAppSelector(selectFilterPokemon);

	const next = useAppSelector(selectNext);

	const { ref } = useScroll(next);

	const toggleFavoritePokemon = useFavorite();

	return (
		<>
			{pokemon.length === 0 && !next ? <Nothing /> : null}
			{pokemon.length > 0 ? (
				<PokemonList pokemon={pokemon} toggle={toggleFavoritePokemon} />
			) : null}
			{next ? (
				<div ref={ref} className="mb-4 flex grow items-center">
					<Spinner />
				</div>
			) : null}
		</>
	);
};

export default Pokemon;
