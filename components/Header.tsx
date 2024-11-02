'use client';

import { useState } from 'react';
import Image from 'next/image';
import MobMenu from './MobMenu';
import BurgerBtn from './BurgerBtn';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="min-h-full">
			<header className="bg-gray-800 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Image
								className="h-8 w-8"
								src="/pokemonball.svg"
								alt="Your Company"
								width={32}
								height={32}
							/>
						</div>
						<nav className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a
									href="#"
									className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
									aria-current="page"
								>
									Pokemons
								</a>
								<a
									href="#"
									className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
								>
									Favorites
								</a>
							</div>
						</nav>
					</div>
					<BurgerBtn isMenuOpen={isOpen} toggleMenu={setIsOpen} />
				</div>
				{isOpen ? <MobMenu /> : null}
			</header>

			<header className="bg-white shadow">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold tracking-tight text-gray-900">
						Dashboard
					</h1>
				</div>
			</header>
			<main>
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"></div>
			</main>
		</div>
	);
};

export default Header;
