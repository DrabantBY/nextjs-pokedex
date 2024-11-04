import { useCallback } from 'react';
import {
	addFavoriteAction,
	removeFavoriteAction,
} from '@/app/lib/redux/actions';
import { useAppDispatch } from '@/app/lib/redux/hooks';

import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

const useFavorite = () => {
	const dispatch = useAppDispatch();

	const addFavorite = useCallback(
		(value: PokemonDetailsType) => dispatch(addFavoriteAction(value)),
		[dispatch]
	);

	const removeFavorite = useCallback(
		(value: PokemonDetailsType) => dispatch(removeFavoriteAction(value)),
		[dispatch]
	);

	return { addFavorite, removeFavorite };
};

export default useFavorite;
