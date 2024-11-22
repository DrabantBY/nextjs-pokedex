import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { MouseEventHandler } from 'react';
import type { PokemonDetailsType } from '@/types/pokemonTypes';

type PokemonCardPropsType = PokemonDetailsType & {
	toggle: (id: number, favorite?: boolean) => void;
};

export const PokemonCard = ({ toggle, ...character }: PokemonCardPropsType) => {
	const { id, favorite, src, name, kinds } = character;

	const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		toggle(id, favorite);
	};

	const active = favorite
		? 'bg-gray-700 text-white group-hover:bg-gray-500'
		: 'hover:bg-gray-500 hover:text-white text-gray-400';

	return (
		<li className="group relative shadow-xl rounded-md overflow-hidden hover:shadow-md">
			<Link
				href={{
					pathname: `/pokemon/${name}`,
					query: { favorite: favorite ? '1' : '0' },
				}}
			>
				<figure
					className={`relative w-full h-60 xs:h-40 md:h-44 lg:h-48 xl:h-52 bg-gray-${
						favorite ? 700 : 100
					} group-hover:bg-gray-${favorite ? 500 : 200}`}
				>
					<Image
						className="p-2"
						src={src || '/pokemonball.svg'}
						alt="Pokemon picture"
						fill={true}
						priority
						sizes="(min-width: 420px) 40vw, (min-width: 640px) 25vw, (min-width: 768px) 20vw, 90vw"
					/>
				</figure>

				<div className="flex justify-between items-center gap-2 p-2">
					<h2 className="font-md text-gray-600 capitalize">{name}</h2>

					<span className="flex gap-1 cursor-pointer flex-wrap sm:flex-nowrap mw-">
						{kinds.map((kind) => (
							<Image
								key={kind}
								src={`/${kind}.svg`}
								alt="Pokemon kind picture"
								width={24}
								height={24}
								title={kind}
							/>
						))}
					</span>
				</div>

				<div className="flex">
					<button
						className={`rounded-md px-3 py-2 text-sm mb-2 mx-2 bg-gray-200 grow ${active} font-bold`}
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
