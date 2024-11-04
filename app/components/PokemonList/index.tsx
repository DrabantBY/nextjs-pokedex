'use client';

import PokemonCard from '../PokemonCard';
import useFavorite from '@/app/lib/hooks/useFavorite';
import { useAppSelector } from '@/app/lib/redux/hooks';
import { selectFavorites } from '@/app/lib/redux/selectors';

import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
};

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const favorites = useAppSelector(selectFavorites);

	const { addFavorite, removeFavorite } = useFavorite();

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
