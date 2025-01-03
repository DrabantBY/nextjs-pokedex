import { memo } from 'react';
import PokemonCard from '@/ui/PokemonCard';
import { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonListPropsType = {
	pokemon: PokemonDetailsType[];
	toggle: (id: number, favorite: boolean) => void;
};

const PokemonList = ({ pokemon, toggle }: PokemonListPropsType) => (
	<section className="pb-4">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<ul className="my-10 grid xs:grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-4 xl:gap-x-8">
				{pokemon.map((creature) => (
					<PokemonCard key={creature.id} {...creature} toggle={toggle} />
				))}
			</ul>
		</div>
	</section>
);

export default memo(PokemonList);
