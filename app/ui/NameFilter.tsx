'use client';

import { ChangeEventHandler, memo, useState } from 'react';
import { selectFilterParams } from '../lib/redux/selectors';
import { useAppDispatch, useAppSelector } from '../lib/redux/hooks';
import { addFilterAction } from '../lib/redux/actions';

const NameFilter = () => {
	const { name } = useAppSelector(selectFilterParams);

	const [value, setValue] = useState(name);

	const dispatch = useAppDispatch();

	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const { name, value } = event.target;
		setValue(value);
		dispatch(addFilterAction({ [name]: value }));
	};

	return (
		<div className="w-56 flex rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-gray-600">
			<label
				htmlFor="name"
				className="flex select-none items-center pl-3 text-gray-700 text-md"
			>
				name:
			</label>

			<input
				id="name"
				name="name"
				type="text"
				className="block flex-1 border-0 bg-transparent pl-1 py-2 text-gray-500 focus:ring-0 outline-none"
				value={value}
				onChange={handleOnChange}
			></input>
		</div>
	);
};

export default memo(NameFilter);
