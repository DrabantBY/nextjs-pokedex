'use client';
import { useAppDispatch } from '@/app/lib/redux/hooks';
import { addFavoriteAction } from '@/app/lib/redux/actions';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';
import PokemonCard from '../PokemonCard';

type PokemonPropsType = {
	pokemon: PokemonDetailsType[];
};

const PokemonList = ({ pokemon }: PokemonPropsType) => {
	const dispatch = useAppDispatch();

	return (
		<ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			{pokemon.map((character) => (
				<PokemonCard key={character.id} {...character} />
			))}
			{/*  <li key={character.name}>
				 	<span>{character.id}</span>
				 	<button
				 		type="button"
				 		onClick={() => dispatch(addFavoriteAction(character))}
				 	>
				 		{character.name}
				 	</button>
				 </li> */}
		</ul>
	);
};

export default PokemonList;
