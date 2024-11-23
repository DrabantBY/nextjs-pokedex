const debounce = <T extends (...args: any[]) => any>(fn: T, time: number) => {
	let timer: ReturnType<typeof setTimeout> | null = null;

	const debouncedFn = (...args: Parameters<T>) => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			timer = null;
			fn.apply(null, [...args]);
		}, time);
	};

	debouncedFn.reset = () => {
		if (timer) {
			clearTimeout(timer);
		}
	};

	return debouncedFn;
};

export default debounce;
