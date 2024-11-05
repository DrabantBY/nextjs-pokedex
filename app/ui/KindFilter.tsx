'use client';

import type { ChangeEventHandler } from 'react';

//TODO add custom hook
import { memo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks';
import { addFilterAction } from '../lib/redux/actions';
import { selectFilterParams } from '../lib/redux/selectors';

type KindFilterPropsType = {
	options: string[];
};

const KindFilter = ({ options }: KindFilterPropsType) => {
	const { kind } = useAppSelector(selectFilterParams);

	const [value, setValue] = useState(kind);

	const dispatch = useAppDispatch();

	const handleOnChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
		const { name, value } = event.target;
		setValue(value);
		dispatch(addFilterAction({ [name]: value }));
	};

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
				value={value}
				onChange={handleOnChange}
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
