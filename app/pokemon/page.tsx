import { Metadata } from 'next';
import PokemonList from '@/app/components/PokemonList';
import KindFilter from '@/app/ui/KindFilter';
import { getPokemonList } from '@/app/lib/fetch/fetchPokemon';
import { getKindList } from '../lib/fetch/fetchPokemonKinds';

export const metadata: Metadata = {
	title: 'Pokedex | pokemon',
	description: 'Pokedex app pokemon page',
};

const PokemonPage = async () => {
	const data = await getPokemonList();
	const kinds = await getKindList();

	return (
		<>
			<section>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<KindFilter options={kinds} />
				</div>
			</section>
			<PokemonList pokemon={data} />
		</>
	);
};

export default PokemonPage;
