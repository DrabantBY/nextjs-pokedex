'use client';

import { memo } from 'react';
import PokemonCard from '@/app/ui/PokemonCard';
import usePokemon from '@/app/lib/hooks/usePokemon';
import Nothing from '@/app/ui/Nothing';

import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
};

//TODO https://dev.to/cantem/how-to-write-a-debounce-function-1bdf

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const { pokemonList, favoriteList, addFavorite, removeFavorite } =
		usePokemon(pokemon);

	return pokemonList.length === 0 ? (
		<Nothing />
	) : (
		<section>
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
		</section>
	);
};

export default memo(PokemonList);
