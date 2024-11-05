import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

type FilterParamsStateType = {
	name: string;
	kind: string;
};

const initialFilterParamsState: FilterParamsStateType = {
	name: '',
	kind: '',
};

const filterParamsSlice = createSlice({
	name: 'filters',

	initialState: initialFilterParamsState,

	reducers: {
		changeFilterAction: (
			state,
			action: PayloadAction<Record<string, string>>
		) => {
			state = Object.assign(state, action.payload);
		},

		clearFilterAction: () => initialFilterParamsState,
	},
});

export default filterParamsSlice;
