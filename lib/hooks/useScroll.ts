import { useCallback, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addPokemonAction } from '@/lib/redux/actions';
import { getPokemonList } from '@/lib/fetch/fetchPokemon';

import type { PokemonDetailsType } from '@/types/pokemonTypes';

type UseScrollInitDataType = {
	next: string | null;
	pokemon: PokemonDetailsType[];
};

const useScroll = ({ next, pokemon }: UseScrollInitDataType) => {
	const listRef = useRef<HTMLUListElement | null>(null);

	const [url, setUrl] = useState(next);

	const [list, setList] = useState(pokemon);

	const dispatch = useAppDispatch();

	const addPokemonList = useCallback(
		({ next, pokemon }: UseScrollInitDataType) => {
			setUrl(next);
			setList(pokemon);
			dispatch(addPokemonAction(pokemon));
		},
		[dispatch]
	);

	const handleScroll = useCallback(
		(url: string | null) => {
			const listBottom = listRef.current?.getBoundingClientRect().bottom;

			const { clientHeight } = document.documentElement;

			if (url && listBottom && listBottom <= clientHeight) {
				getPokemonList(url).then(addPokemonList);
			}
		},
		[addPokemonList]
	);

	useEffect(() => {
		const data = { next: url, pokemon: list };
		addPokemonList(data);
	}, [addPokemonList, url, list]);

	useEffect(() => {
		window.onscroll = () => handleScroll(url);

		return () => {
			window.onscroll = null;
		};
	}, [handleScroll, url]);

	return listRef;
};

export default useScroll;
