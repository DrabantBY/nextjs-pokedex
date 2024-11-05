import Image from 'next/image';

const Logo = () => {
	return (
		<div className="flex-shrink-0">
			<Image
				className="h-8 w-8"
				src="/pokemonball.svg"
				alt="Pokedex logo"
				width={32}
				height={32}
				priority
			/>
		</div>
	);
};

export default Logo;
