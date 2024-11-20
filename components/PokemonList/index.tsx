'use client';

import { memo } from 'react';
import PokemonCard from '@/ui/PokemonCard';
import Nothing from '@/ui/Nothing';
import Spinner from '@/ui/Spinner';
import useScroll from '@/lib/hooks/useScroll';
import useFavorite from '@/lib/hooks/useFavorite';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectFavorites } from '@/lib/redux/selectors';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
	next: string | null;
};

const PokemonList = (props: PokemonPropsType) => {
	const { ref, pokemonList } = useScroll(props);
	console.log('render pokemon list');

	const { addFavorite, removeFavorite } = useFavorite();

	const favoriteList = useAppSelector(selectFavorites);

	return pokemonList.length === 0 ? (
		<Nothing />
	) : (
		<section className="pb-4">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ul className="my-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-10">
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
			<div ref={ref}>
				<Spinner />
			</div>
		</section>
	);
};

export default memo(PokemonList);
