import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectFilter } from '@/lib/redux/selectors';
import { changeFilterAction, clearFilterAction } from '@/lib/redux/actions';
import type { ChangeEventHandler } from 'react';

const useFilter = () => {
	const { name, kind } = useAppSelector(selectFilter);

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
