import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type FilterStateType = {
	name: string;
	kind: string;
};

const initialFilterState: FilterStateType = {
	name: '',
	kind: '',
};

const filterSlice = createSlice({
	name: 'filters',

	initialState: initialFilterState,

	reducers: {
		changeFilterAction: (
			state,
			action: PayloadAction<Record<string, string>>
		) => {
			state = Object.assign(state, action.payload);
		},

		clearFilterAction: () => initialFilterState,
	},
});

export default filterSlice;
