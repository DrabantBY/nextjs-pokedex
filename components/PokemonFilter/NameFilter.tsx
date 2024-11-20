import { memo, useEffect, useState } from 'react';
import type { ChangeEvent, ChangeEventHandler } from 'react';

type NameFilterPropsType = {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const NameFilter = ({ value, onChange }: NameFilterPropsType) => {
	const [state, setState] = useState('');

	useEffect(() => {
		setState(value);
	}, [value]);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value);
		onChange(event);
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
				value={state}
				onChange={handleOnChange}
			/>
		</div>
	);
};

export default memo(NameFilter);
