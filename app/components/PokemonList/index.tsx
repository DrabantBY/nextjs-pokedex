'use client';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { addFavoriteAction } from '@/app/lib/redux/actions';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
};

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const dispatch = useAppDispatch();

	return (
		<ul>
			{pokemon.map((character) => (
				<li key={character.name}>
					<span>{character.id}</span>
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
