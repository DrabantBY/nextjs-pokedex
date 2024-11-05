import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import type { MouseEventHandler } from 'react';
import type { PokemonDetailsType } from '@/app/types/pokemonTypes';

type PokemonCardPropsType = PokemonDetailsType & {
	favorite: boolean;
	toggleFavorite: (value: PokemonDetailsType) => void;
};

export const PokemonCard = ({
	toggleFavorite,
	favorite,
	...character
}: PokemonCardPropsType) => {
	const { src, name, kinds } = character;

	const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		toggleFavorite(character);
	};

	const active = favorite
		? 'bg-gray-700 text-white group-hover:bg-gray-500'
		: 'hover:bg-gray-500 hover:text-white text-gray-500';

	return (
		<li className="group relative shadow-xl rounded-md overflow-hidden hover:shadow-md">
			<Link
				href={{
					pathname: `/pokemon/${name}`,
					query: { favorite },
				}}
			>
				<figure
					className={`relative h-36 w-full bg-gray-${
						favorite ? 700 : 100
					} group-hover:bg-gray-${favorite ? 500 : 200}`}
				>
					<Image src={src} alt="Pokemon picture" fill={true} priority />
				</figure>

				<div className="flex justify-between items-center gap-2 p-2">
					<h2 className="font-md text-gray-600 capitalize">{name}</h2>

					<span className="flex gap-1 cursor-pointer flex-wrap sm:flex-nowrap mw-">
						{kinds.map((kind) => (
							<Image
								className="min-w-4 min-h-4 size-4 sm:size-8"
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
						className={`rounded-md px-3 py-2 text-sm mb-2 mx-2 bg-gray-200 grow ${active} font-bold `}
						type="button"
						onClick={handleOnClick}
					>
						favorite
					</button>
				</div>
			</Link>
		</li>
	);
};

export default memo(PokemonCard);
