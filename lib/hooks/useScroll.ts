import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { selectFilterPokemon, selectNext } from '@/lib/redux/selectors';
import fetchPokemonList from '@/lib/redux/thunks';

const useScroll = () => {
	const ref = useRef<HTMLDivElement | null>(null);

	const dispatch = useAppDispatch();
	const pokemon = useAppSelector(selectFilterPokemon);
	const next = useAppSelector(selectNext);

	useEffect(() => {
		dispatch(fetchPokemonList());
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([spinner]) => {
				if (spinner.isIntersecting && next) {
					dispatch(fetchPokemonList(next));
				}
			},
			{ threshold: 0.7 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	});

	return { ref, pokemon, next };
};

export default useScroll;
