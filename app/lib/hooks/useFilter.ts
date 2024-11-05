import { useAppDispatch, useAppSelector } from '@/app/lib/redux/hooks';
import { selectFilterParams } from '@/app/lib/redux/selectors';
import { changeFilterAction, clearFilterAction } from '@/app/lib/redux/actions';

import { useCallback, type ChangeEventHandler } from 'react';

const useFilter = () => {
	const { name, kind } = useAppSelector(selectFilterParams);

	const dispatch = useAppDispatch();

	const changeFilter: ChangeEventHandler<HTMLSelectElement | HTMLInputElement> =
		useCallback(
			(event) => {
				const { name, value } = event.target;

				dispatch(changeFilterAction({ [name]: value }));
			},
			[dispatch]
		);

	const clearFilter = useCallback(() => {
		dispatch(clearFilterAction());
	}, [dispatch]);

	return { name, kind, changeFilter, clearFilter };
};

export default useFilter;
