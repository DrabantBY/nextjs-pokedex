import { memo } from 'react';
import Image from 'next/image';
import NavLink from '@/app/ui/NavLink';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonCardPropsType = PokemonDetailsType & {
	isFavorite: boolean;
	toggleFavorite: (value: PokemonDetailsType) => void;
};

export const PokemonCard = ({
	toggleFavorite,
	isFavorite,
	...character
}: PokemonCardPropsType) => {
	const { src, name, kinds } = character;

	console.log(name);

	const active = isFavorite
		? 'bg-gray-700 text-white'
		: 'hover:bg-gray-500 hover:text-white text-gray-500';

	return (
		<li className="group relative shadow-xl rounded-md overflow-hidden hover:shadow-md">
			<figure className=" relative w-full bg-gray-100 h-36 group-hover:bg-gray-200">
				<Image src={src} alt="Pokemon picture" fill={true} priority />
			</figure>

			<div className="flex justify-between items-center gap-2 p-2">
				<NavLink route={`pokemon/${name}`} label={name} active={false} />

				<span className="flex gap-1 cursor-pointer">
					{kinds.map((kind) => (
						<Image
							key={kind}
							src={`/${kind}.svg`}
							alt="Pokemon kind picture"
							width={32}
							height={32}
							title={kind}
						/>
					))}
				</span>
			</div>

			<div className="flex">
				<button
					className={`rounded-md px-3 py-2 text-sm mb-2 mx-2 bg-gray-200 grow ${active} font-bold`}
					type="button"
					onClick={() => toggleFavorite(character)}
				>
					favorite
				</button>
			</div>
		</li>
	);
};

export default memo(PokemonCard);
