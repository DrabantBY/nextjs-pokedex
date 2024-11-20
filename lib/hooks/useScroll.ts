import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { addPokemonAction } from '@/lib/redux/actions';
import { getPokemonList } from '@/lib/fetch/fetchPokemon';
import { selectFilterPokemon } from '@/lib/redux/selectors';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type UseScrollInitDataType = {
	next: string | null;
	pokemon: PokemonDetailsType[];
};

const useScroll = ({ next, pokemon }: UseScrollInitDataType) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const pokemonList = useAppSelector(selectFilterPokemon);

	const [url, setUrl] = useState(next);

	const dispatch = useAppDispatch();

	useEffect(() => {
		console.log('effect first pokemon');
		dispatch(addPokemonAction(pokemon));
	}, [pokemon]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			async ([spinner]) => {
				if (spinner.isIntersecting) {
					if (url) {
						const { next, pokemon } = await getPokemonList(url);
						setUrl(next);
						dispatch(addPokemonAction(pokemon));
					}
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			observer.disconnect();
		};
	});

	return { ref, pokemonList };
};

export default useScroll;
