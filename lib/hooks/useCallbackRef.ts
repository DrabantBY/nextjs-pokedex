import { useCallback, useLayoutEffect, useRef } from 'react';

const useCallbackRef = <T extends (...args: any[]) => any>(fn: T) => {
	const fnRef = useRef(fn);

	useLayoutEffect(() => {
		fnRef.current = fn;
	}, [fn]);

	const callbackRef = useCallback(
		(...args: Parameters<T>) => fnRef.current.apply(null, args),
		[fnRef]
	);

	return callbackRef;
};

export default useCallbackRef;
