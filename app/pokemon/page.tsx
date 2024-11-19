import { Metadata } from 'next';
import PokemonList from '@/components/PokemonList';
import PokemonFilter from '@/components/PokemonFilter';
import { getPokemonList } from '@/lib/fetch/fetchPokemon';
import { getKindList } from '@/lib/fetch/fetchPokemonKinds';

export const metadata: Metadata = {
	title: 'Pokedex | pokemon',
	description: 'Pokedex app pokemon page',
};

const PokemonPage = async () => {
	const [data, kinds] = await Promise.all([getPokemonList(), getKindList()]);

	return (
		<>
			<PokemonFilter kinds={kinds} />
			<PokemonList {...data} />
		</>
	);
};

export default PokemonPage;
