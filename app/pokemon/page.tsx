import { Metadata } from 'next';
import { getPokemonList } from '@/app/lib/fetch/getPokemon';
import PokemonList from '../components/PokemonList';

export const metadata: Metadata = {
	title: 'Pokedex | pokemon',
	description: 'Pokedex app pokemon page',
};

const PokemonPage = async () => {
	const data = await getPokemonList();

	return <PokemonList pokemon={data} />;
};

export default PokemonPage;
