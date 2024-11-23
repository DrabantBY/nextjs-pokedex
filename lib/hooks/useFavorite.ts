import { useCallback } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setFavoritePokemonAction } from '@/lib/redux/actions';

const useFavorite = () => {
	const dispatch = useAppDispatch();

	const setFavoritePokemon = useCallback(
		(id: number, favorite: boolean) => {
			dispatch(setFavoritePokemonAction({ id, changes: { favorite } }));
		},

		[dispatch]
	);

	return setFavoritePokemon;
};

export default useFavorite;
