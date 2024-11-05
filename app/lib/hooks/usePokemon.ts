import { useEffect } from 'react';
import {
	selectFavorites,
	selectFilterPokemon,
} from '@/app/lib/redux/selectors';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { useAppSelector } from '@/app/lib/redux/hooks';
import { addPokemonAction } from '@/app/lib/redux/actions';
import useFavorite from './useFavorite';

import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

const usePokemon = (pokemon: PokemonDetailsType[]) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(addPokemonAction(pokemon));
	}, [dispatch, pokemon]);

	const favoriteList = useAppSelector(selectFavorites);

	const pokemonList = useAppSelector(selectFilterPokemon);

	const { addFavorite, removeFavorite } = useFavorite();

	return { pokemonList, favoriteList, addFavorite, removeFavorite };
};

export default usePokemon;
