import { useState, useCallback } from 'react';

const useToggle = (value: boolean) => {
	const [state, setState] = useState(value);

	const close = useCallback(() => {
		setState(false);
	}, []);

	const open = useCallback(() => {
		setState(true);
	}, []);

	const toggle = useCallback(() => {
		setState((state) => !state);
	}, []);

	return { state, open, toggle, close };
};

export default useToggle;
