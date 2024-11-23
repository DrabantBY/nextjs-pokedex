'use client';

import { memo } from 'react';
import KindFilter from '@/ui/PokemonFilter/KindFilter';
import NameFilter from '@/ui/PokemonFilter/NameFilter';
import useFilter from '@/lib/hooks/useFilter';

type PokemonFilterPropsType = {
	kinds: string[];
};

const PokemonFilter = ({ kinds }: PokemonFilterPropsType) => {
	const { kind, name, changeFilter, clearFilter } = useFilter();

	const disable =
		!kind && !name
			? 'bg-gray-200 text-gray-400'
			: 'bg-gray-700 text-white hover:bg-gray-600';

	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap xs:flex-nowrap item-center gap-2 my-4 sm:w-min">
					<NameFilter state={name} onChange={changeFilter} />
					<KindFilter options={kinds} value={kind} onChange={changeFilter} />
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
