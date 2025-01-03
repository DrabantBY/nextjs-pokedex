import { memo, useEffect, useRef } from 'react';
import useDebounce from '@/lib/hooks/useDebounce';
import type { ChangeEventHandler } from 'react';

type NameFilterPropsType = {
	state: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
};

const NameFilter = ({ state, onChange }: NameFilterPropsType) => {
	const debouncedOnChange = useDebounce(onChange, 500);

	const refInput = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (refInput.current) {
			refInput.current.value = state;
		}
	}, [state]);

	return (
		<div className="flex grow xs:shrink sm:w-56 rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-gray-600">
			<label
				htmlFor="name"
				className="flex select-none items-center pl-3 text-gray-700 text-md"
			>
				name:
			</label>

			<input
				ref={refInput}
				id="name"
				name="name"
				type="text"
				className="w-full border-0 bg-transparent pl-1 py-2 text-gray-500 focus:ring-0 outline-none"
				onChange={debouncedOnChange}
			/>
		</div>
	);
};

export default memo(NameFilter);
