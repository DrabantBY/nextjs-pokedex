import { memo } from 'react';
import type { ChangeEventHandler } from 'react';

type KindFilterPropsType = {
	options: string[];
	value: string;
	onChange: ChangeEventHandler<HTMLSelectElement>;
};

const KindFilter = ({ options, ...props }: KindFilterPropsType) => {
	return (
		<div className="w-40 flex rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-gray-600">
			<label
				htmlFor="kind"
				className="flex select-none items-center pl-3 text-gray-700 text-md"
			>
				kind:
			</label>

			<select
				id="kind"
				name="kind"
				autoComplete="kind-name"
				className="block flex-1 border-0 bg-transparent pl-1 py-2 text-gray-500 focus:ring-0 outline-none"
				{...props}
			>
				<option value="">All</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default memo(KindFilter);
