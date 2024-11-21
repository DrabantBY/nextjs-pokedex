import { Metadata } from 'next';
import Pokemon from '@/ui/Pokemon';
import PokemonFilter from '@/ui/PokemonFilter';
import { getPokemonList } from '@/lib/fetch/fetchPokemon';
import { getKindList } from '@/lib/fetch/fetchPokemonKinds';

export const metadata: Metadata = {
	title: 'Pokedex | pokemon',
	description: 'Pokedex app pokemon page',
};

const PokemonPage = async () => {
	const kinds = await getKindList();

	return (
		<>
			<PokemonFilter kinds={kinds} />
			<Pokemon />
		</>
	);
};

export default PokemonPage;
