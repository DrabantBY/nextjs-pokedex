import { Metadata } from 'next';
import PokemonList from '@/app/components/PokemonList';
import { getPokemonList } from '@/app/lib/fetch/fetchPokemon';

export const metadata: Metadata = {
	title: 'Pokedex | pokemon',
	description: 'Pokedex app pokemon page',
};

const PokemonPage = async () => {
	const data = await getPokemonList();

	return <PokemonList pokemon={data} />;
};

export default PokemonPage;
