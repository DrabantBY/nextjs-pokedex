import { getPokemonList } from '@/app/lib/fetch/getPokemon';

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
