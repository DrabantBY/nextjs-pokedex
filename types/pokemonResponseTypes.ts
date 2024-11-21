import type { PokemonCommonType } from './pokemonTypes';

type PokemonSpritesType = {
	other: {
		'official-artwork': {
			front_default: string | null;
		};
	};
};

type PokemonUrlNameType = {
	name: string;
	url: string;
};

type PokemonStatType = {
	base_stat: number;
	effort: number;
	stat: {
		name: string;
		url: string;
	};
};

type PokemonKindType = {
	slot: 1;
	type: PokemonUrlNameType;
};

export type PokemonUrlNameResponseType = {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonUrlNameType[];
};

export type PokemonDetailsResponseType = PokemonCommonType & {
	sprites: PokemonSpritesType;
	stats: PokemonStatType[];
	types: PokemonKindType[];
};
