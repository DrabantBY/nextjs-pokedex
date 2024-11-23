import { useCallback } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import {
	setFavoritePokemonAction,
	remFavoritePokemonAction,
} from '@/lib/redux/actions';

const useFavorite = () => {
	const dispatch = useAppDispatch();

	const toggleFavoritePokemon = useCallback(
		(id: number, favorite: boolean = false) => {
			if (favorite) {
				dispatch(remFavoritePokemonAction(id));
			} else {
				dispatch(setFavoritePokemonAction(id));
			}
		},

		[dispatch]
	);

	return toggleFavoritePokemon;
};

export default useFavorite;
