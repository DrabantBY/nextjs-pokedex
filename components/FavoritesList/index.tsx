'use client';

import PokemonCard from '@/ui/PokemonCard';
import Nothing from '@/ui/Nothing';
import useFavorite from '@/lib/hooks/useFavorite';
import { useAppSelector } from '@/lib/redux/hooks';
import { selectFavorites } from '@/lib/redux/selectors';

const FavoritesList = () => {
	const favorites = useAppSelector(selectFavorites);

	const { removeFavorite } = useFavorite();

	return favorites.length === 0 ? (
		<Nothing />
	) : (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ul className="my-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:gap-10">
					{favorites.map((favorite) => {
						return (
							<PokemonCard
								key={favorite.id}
								{...favorite}
								favorite={true}
								toggleFavorite={removeFavorite}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default FavoritesList;
