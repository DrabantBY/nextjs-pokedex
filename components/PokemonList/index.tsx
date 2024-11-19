'use client';

import { memo } from 'react';
import PokemonCard from '@/ui/PokemonCard';
import Nothing from '@/ui/Nothing';

import type { PokemonDetailsType } from '@/types/pokemonTypes';
import useScroll from '@/lib/hooks/useScroll';
import useFavorite from '@/lib/hooks/useFavorite';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectFavorites, selectFilterPokemon } from '@/lib/redux/selectors';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
	next: string | null;
};

const PokemonList = (props: PokemonPropsType) => {
	const listRef = useScroll(props);
	console.log('render pokemon list');
	const { addFavorite, removeFavorite } = useFavorite();

	const pokemonList = useAppSelector(selectFilterPokemon);
	const favoriteList = useAppSelector(selectFavorites);

	return pokemonList.length === 0 ? (
		<Nothing />
	) : (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ul
					ref={listRef}
					className="my-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-10"
				>
					{pokemonList.map((character) => {
						let isFavorite = false;

						if (favoriteList.length !== 0) {
							isFavorite = favoriteList.some(
								(favorite) => favorite.id === character.id
							);
						}

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
