export type PokemonCommonType = {
	id: number;
	name: string;
	base_experience: number;
	height: number;
	weight: number;
};

export type PokemonDetailsType = PokemonCommonType & {
	kinds: string[];
	param: Array<{
		value: number;
		name: string;
	}>;
};
