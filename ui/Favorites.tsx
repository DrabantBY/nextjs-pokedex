'use client';

import Nothing from '@/ui/Nothing';
import useFavorite from '@/lib/hooks/useFavorite';
import PokemonList from './PokemonList';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectFavorite } from '@/lib/redux/selectors';

const Favorites = () => {
	const favorites = useAppSelector(selectFavorite);

	const toggleFavoritePokemon = useFavorite();

	return favorites.length === 0 ? (
		<Nothing />
	) : (
		<PokemonList pokemon={favorites} toggle={toggleFavoritePokemon} />
	);
};

export default Favorites;
