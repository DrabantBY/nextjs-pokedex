import FavoritesList from '../../components/FavoritesList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pokedex | favorites',
	description: 'Pokedex app favorites page',
};

const FavoritesPage = async () => {
	return <FavoritesList />;
};

export default FavoritesPage;
