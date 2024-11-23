import { Metadata } from 'next';
import Image from 'next/image';
import { getPokemonDetails } from '@/lib/fetch/fetchPokemon';

type DetailsPagePropsType = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ favorite: string }>;
};

export async function generateMetadata({
	params,
}: DetailsPagePropsType): Promise<Metadata> {
	const { slug } = await params;

	return {
		title: `Pokedex | ${slug}`,
		description: `Pokedex app ${slug} page`,
	};
}

const DetailsPage = async ({ params, searchParams }: DetailsPagePropsType) => {
	const { slug } = await params;
	const { favorite } = await searchParams;

	const pokemon = await getPokemonDetails('', slug);

	const { src, name, kinds, data, weight, height } = pokemon;

	const favoriteClass = parseInt(favorite) ? 'text-green-600' : 'text-gray-600';

	return (
		<section className="grow flex justify-center items-center my-4">
			<div className="max-w-7xl grow mx-auto px-4 sm:px-6 lg:px-8 bg-color-red">
				<div className="relative flex flex-col justify-center md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-2 p-2 sm:p-4 border border-gray-200 rounded-lg shadow hover:bg-gray-100">
					<figure className="relative calc w-full md:w-[430] md:h-[430] lg:w-[500] lg:h-[500]">
						<Image
							src={src || '/pokemonball.svg'}
							alt="Pokemon picture"
							fill={true}
							sizes="(min-width: 768px) 430px, (min-width: 1024px) 500px, 95vw"
						/>
					</figure>

					<div className="">
						<h2
							className={`text-center text-3xl font-bold capitalize ${favoriteClass}`}
						>
							{name}
						</h2>

						<hr />

						<div className="mt-4">
							<div className="mb-4">
								<h4 className="text-lg text-gray-600 font-bold">Types</h4>

								<hr />

								{kinds.map((kind) => (
									<figure key={kind} className="mt-1 flex gap-x-2 items-center">
										<Image
											className="size-8"
											key={kind}
											src={`/${kind}.svg`}
											alt="Pokemon kind picture"
											width={32}
											height={32}
											title={kind}
										/>

										<figcaption className="text-md font-medium text-gray-400">
											{kind}
										</figcaption>
									</figure>
								))}
							</div>

							<div className="min-w-60">
								<h4 className="text-lg text-gray-600 font-bold">Stats</h4>

								<hr />

								<ul className="flex flex-col gap-1 mt-1">
									<li className="flex justify-between">
										weight: <span>{weight}</span>
									</li>

									<li className="flex justify-between">
										height: <span>{height}</span>
									</li>

									{data.flatMap(Object.entries).map(([key, val]) => (
										<li key={key} className="flex justify-between items-center">
											{key}: <span>{val}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DetailsPage;
