'use client';

import { memo } from 'react';
import KindFilter from '@/app/ui/KindFilter';
import NameFilter from '@/app/ui/NameFilter';
import useFilter from '@/app/lib/hooks/useFilter';

type PokemonFilterPropsType = {
	kinds: string[];
};

const PokemonFilter = ({ kinds }: PokemonFilterPropsType) => {
	const { kind, name, changeFilter, clearFilter } = useFilter();

	const disable =
		!kind && !name
			? 'bg-gray-200 text-gray-600'
			: 'bg-gray-700 text-white hover:bg-gray-600';

	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex item-center justify-center gap-2 flex-wrap my-4">
					<KindFilter options={kinds} value={kind} onChange={changeFilter} />
					<NameFilter value={name} onChange={changeFilter} />
					<button
						className={`rounded-md px-4 py-2 text-sm font-bold ${disable}`}
						type="button"
						onClick={clearFilter}
						disabled={!kind && !name}
					>
						clear
					</button>
				</div>
			</div>
		</section>
	);
};

export default memo(PokemonFilter);
