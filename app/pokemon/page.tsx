import { Metadata } from 'next';
import { getPokemonList } from '@/app/lib/fetch/getPokemon';

export const metadata: Metadata = {
	title: 'Pokedex | pokemon',
	description: 'Pokedex app pokemon page',
};

const PokemonPage = async () => {
	const data = await getPokemonList();

	console.log(data);

	return (
		<ul>
			{data.map(({ name }) => (
				<li key={name}>{name}</li>
			))}
		</ul>
	);
};

export default PokemonPage;
