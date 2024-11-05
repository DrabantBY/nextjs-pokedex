'use client';

import { memo } from 'react';
import KindFilter from '@/app/ui/KindFilter';
import NameFilter from '@/app/ui/NameFilter';

type PokemonFilterPropsType = {
	kinds: string[];
};

const PokemonFilter = ({ kinds }: PokemonFilterPropsType) => {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<KindFilter options={kinds} />
				<NameFilter />
			</div>
		</section>
	);
};

export default memo(PokemonFilter);
