export type PokemonCommonType = {
	id: number;
	name: string;
	height: number;
	weight: number;
};

export type PokemonDetailsType = PokemonCommonType & {
	src: string;
	kinds: string[];
	data: Record<string, number>[];
};