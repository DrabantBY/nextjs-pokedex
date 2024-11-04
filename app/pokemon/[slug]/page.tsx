import { getPokemonDetails } from '@/app/lib/fetch/fetchPokemon';

type DetailsPagePropsType = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ favorite: boolean }>;
};

const DetailsPage = async ({ params, searchParams }: DetailsPagePropsType) => {
	const { slug } = await params;
	const { favorite } = await searchParams;

	const pokemon = await getPokemonDetails('', slug);

	return (
		<h1>
			{pokemon.name} <span>{favorite}</span>
		</h1>
	);
};

export default DetailsPage;
