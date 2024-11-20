'use client';

import PokemonCard from '@/ui/PokemonCard';
import Nothing from '@/ui/Nothing';
import useFavorite from '@/lib/hooks/useFavorite';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectFavoritesPokemon } from '@/lib/redux/selectors';

const FavoritesList = () => {
	const favoritesPokemon = useAppSelector(selectFavoritesPokemon);

	const { remFavoritePokemon } = useFavorite();

	return favoritesPokemon.length === 0 ? (
		<Nothing />
	) : (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ul className="my-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-10">
					{favoritesPokemon.map((favorite) => {
						return (
							<PokemonCard
								key={favorite.id}
								{...favorite}
								toggleFavorite={remFavoritePokemon}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default FavoritesList;
