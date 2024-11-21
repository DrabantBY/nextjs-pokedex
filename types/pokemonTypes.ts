export type PokemonCommonType = {
	id: number;
	name: string;
	height: number;
	weight: number;
	favorite?: boolean;
};

export type PokemonDetailsType = PokemonCommonType & {
	src: string | null;
	kinds: string[];
	data: Record<string, number>[];
};
