'use client';
import { useAppSelector, useAppDispatch } from '@/app/lib/redux/hooks';
import { selectFavorites } from '@/app/lib/redux/selectors';
import { removeFromFavorites } from '@/app/lib/redux/actions';

const FavoritesList = () => {
	const dispatch = useAppDispatch();
	const favorites = useAppSelector(selectFavorites);
	console.log(favorites);

	return (
		<ul>
			{favorites.map((character) => (
				<li key={character.name}>
					<button
						type="button"
						onClick={() => dispatch(removeFromFavorites(character))}
					>
						{character.name}
					</button>
				</li>
			))}
		</ul>
	);
};

export default FavoritesList;
