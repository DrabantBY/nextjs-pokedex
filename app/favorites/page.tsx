import Favorites from '@/ui/Favorites';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pokedex | favorites',
	description: 'Pokedex app favorites page',
};

const FavoritesPage = async () => <Favorites />;

export default FavoritesPage;
