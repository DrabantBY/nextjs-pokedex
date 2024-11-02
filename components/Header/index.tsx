'use client';

import { useState } from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuBtn from './MenuBtn';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="bg-gray-800">
			<div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Logo />
						<NavMenu className="hidden ml-10 md:flex items-baseline space-x-4" />
					</div>
					<MenuBtn isMenuOpen={isOpen} toggleMenu={setIsOpen} />
				</div>
				{isOpen ? <NavMenu className="md:hidden space-y-1 pb-3 pt-2" /> : null}
			</div>
		</header>
	);
};

export default Header;
