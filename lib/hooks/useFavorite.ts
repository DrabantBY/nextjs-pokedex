import { useCallback } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import {
	setFavoritePokemonAction,
	remFavoritePokemonAction,
} from '@/lib/redux/actions';

const useFavorite = () => {
	const dispatch = useAppDispatch();

	const setFavoritePokemon = useCallback(
		(id: number) => dispatch(setFavoritePokemonAction(id)),
		[dispatch]
	);

	const remFavoritePokemon = useCallback(
		(id: number) => dispatch(remFavoritePokemonAction(id)),
		[dispatch]
	);

	return { setFavoritePokemon, remFavoritePokemon };
};

export default useFavorite;
