import { memo, useState } from 'react';
import useDebounce from '@/lib/hooks/useDebounce';
import type { ChangeEventHandler } from 'react';

type NameFilterPropsType = {
	state: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const NameFilter = ({ state, onChange }: NameFilterPropsType) => {
	const [value, setValue] = useState(state);

	const debouncedOnChange = useDebounce(onChange, 2000);

	const handleOnchange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value);
		debouncedOnChange(event);
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
				onChange={handleOnchange}
			/>
		</div>
	);
};

export default memo(NameFilter);
