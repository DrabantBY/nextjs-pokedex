'use client';

import { memo } from 'react';
import PokemonCard from '@/app/ui/PokemonCard';
import useFavorite from '@/app/lib/hooks/useFavorite';
import { useAppSelector } from '@/app/lib/redux/hooks';
import {
	selectFavorites,
	selectFilterPokemon,
} from '@/app/lib/redux/selectors';

//TODO refactor this code
import { addPokemonAction } from '@/app/lib/redux/actions';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { useEffect } from 'react';

import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
};

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const favorites = useAppSelector(selectFavorites);
	const pokemonList = useAppSelector(selectFilterPokemon);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(addPokemonAction(pokemon));
	}, [dispatch, pokemon]);

	const { addFavorite, removeFavorite } = useFavorite();

	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ul className="my-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-10">
					{pokemonList.map((character) => {
						const isFavorite = favorites.some(
							(favorite) => favorite.id === character.id
						);

						return (
							<PokemonCard
								key={character.id}
								{...character}
								favorite={isFavorite}
								toggleFavorite={isFavorite ? removeFavorite : addFavorite}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default memo(PokemonList);
