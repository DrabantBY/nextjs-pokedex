import { useEffect, useRef } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import fetchPokemonList from '@/lib/redux/thunks';

const useScroll = (next: string | null) => {
	const ref = useRef<HTMLDivElement>(null);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const element = ref.current;
		const observer = new IntersectionObserver(
			([spinner]) => {
				if (spinner.isIntersecting && next) {
					dispatch(fetchPokemonList(next));
				}
			},
			{ threshold: 0.7 }
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});

	return { ref };
};

export default useScroll;
