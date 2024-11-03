type PokemonType = {
	name: string;
	url: string;
};

type PokemonResponseType = {
	count: number;
	next: string;
	previous: null;
	results: PokemonType[];
};

export const getPokemonList = async (): Promise<PokemonType[]> => {
	const response = await fetch(`${process.env.BASE_URL}/pokemon`);

	const { results }: PokemonResponseType = await response.json();

	return results;
};
