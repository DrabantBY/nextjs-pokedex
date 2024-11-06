import { Metadata } from 'next';
import PokemonList from '@/app/components/PokemonList';
import PokemonFilter from '@/app/components/PokemonFilter';
import { getPokemonList } from '@/app/lib/fetch/fetchPokemon';
import { getKindList } from '@/app/lib/fetch/fetchPokemonKinds';

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
