export type PokemonType = {
	name: string;
	url: string;
};

export type PokemonResponseType = {
	count: number;
	next: string;
	previous: null;
	results: PokemonType[];
};
