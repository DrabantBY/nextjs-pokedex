'use client';

import { memo } from 'react';
import KindFilter from '@/app/ui/KindFilter';
import NameFilter from '@/app/ui/NameFilter';
import useFilter from '@/app/lib/hooks/useFilter';

type PokemonFilterPropsType = {
	kinds: string[];
};

const PokemonFilter = ({ kinds }: PokemonFilterPropsType) => {
	const { kind, name, changeFilter } = useFilter();

	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<form className="flex item-center justify-center gap-2 mt-4">
					<KindFilter options={kinds} value={kind} onChange={changeFilter} />
					<NameFilter value={name} onChange={changeFilter} />
				</form>
			</div>
		</section>
	);
};

export default memo(PokemonFilter);
