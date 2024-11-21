const debounce = <T extends (...args: any[]) => any>(fn: T, time: number) => {
	let timer: ReturnType<typeof setTimeout> | null = null;

	const debounceFn = (...args: Parameters<T>) => {
		if (timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			timer = null;
			fn.apply(null, args);
		}, time);
	};

	debounceFn.reset = () => {
		if (timer) {
			clearTimeout(timer);
		}
	};

	return debounceFn;
};

export default debounce;
