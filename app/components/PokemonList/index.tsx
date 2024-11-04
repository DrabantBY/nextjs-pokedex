'use client';

import { useCallback } from 'react';
import PokemonCard from '../PokemonCard';
import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import {
	addFavoriteAction,
	removeFavoriteAction,
} from '@/app/lib/redux/actions';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';
import { selectFavorites } from '@/app/lib/redux/selectors';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
};

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const favorites = useAppSelector(selectFavorites);

	const dispatch = useAppDispatch();

	const addFavorite = useCallback(
		(value: PokemonDetailsType) => dispatch(addFavoriteAction(value)),
		[dispatch]
	);

	const removeFavorite = useCallback(
		(value: PokemonDetailsType) => dispatch(removeFavoriteAction(value)),
		[dispatch]
	);

	return (
		<section className="max-w-7xl px-4 sm:px-6 lg:px-8">
			<ul className="my-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{pokemon.map((character) => {
					const isFavorite = favorites.some(
						(favorite) => favorite.id === character.id
					);

					return (
						<PokemonCard
							key={character.id}
							{...character}
							isFavorite={isFavorite}
							toggleFavorite={isFavorite ? removeFavorite : addFavorite}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default PokemonList;
