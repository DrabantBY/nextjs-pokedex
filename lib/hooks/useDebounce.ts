import { useMemo, useCallback, useEffect } from 'react';
import debounce from '@/lib/utils/debounce';
import useCallbackRef from './useCallbackRef';

const useDebounce = <Fn extends (...args: any[]) => any>(
	fn: Fn,
	time: number
) => {
	const callbackRef = useCallbackRef(fn);

	const debouncedFn = useMemo(() => {
		return debounce((...args: Parameters<Fn>) => {
			callbackRef(...args);
		}, time);
	}, [time]);

	useEffect(
		() => () => {
			debouncedFn.reset();
		},
		[debouncedFn]
	);

	return debouncedFn;
};

export default useDebounce;
