'use client';

import PokemonCard from '@/app/ui/PokemonCard';
import useFavorite from '@/app/lib/hooks/useFavorite';
import { useAppSelector } from '@/app/lib/redux/hooks';
import { selectFavorites } from '@/app/lib/redux/selectors';
import Nothing from '@/app/ui/Nothing';

const FavoritesList = () => {
	const favorites = useAppSelector(selectFavorites);

	const { removeFavorite } = useFavorite();

	return favorites.length === 0 ? (
		<Nothing />
	) : (
		<section className="px-4 sm:px-6 lg:px-8">
			<ul className="my-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 max-w-7xl ">
				{favorites.map((favorite) => {
					return (
						<PokemonCard
							key={favorite.id}
							{...favorite}
							isFavorite={true}
							toggleFavorite={removeFavorite}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default FavoritesList;
