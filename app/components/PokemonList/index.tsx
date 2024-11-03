'use client';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { addFavoriteAction } from '@/app/lib/redux/actions';

import type { PokemonType } from '@/app/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonType[];
};

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const dispatch = useAppDispatch();

	return (
		<ul>
			{pokemon.map((character) => (
				<li key={character.name}>
					<button
						type="button"
						onClick={() => dispatch(addFavoriteAction(character))}
					>
						{character.name}
					</button>
				</li>
			))}
		</ul>
	);
};

export default PokemonList;
