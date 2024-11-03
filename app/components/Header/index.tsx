'use client';

import { useState, useCallback } from 'react';

import Logo from './Logo';
import NavMenu from './NavMenu';
import MenuBtn from './MenuBtn';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = useCallback(() => {
		setIsOpen(false);
	}, []);
	const toggleMenu = useCallback(() => {
		setIsOpen((state) => !state);
	}, []);

	return (
		<header className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Logo />
						<NavMenu className="hidden ml-10 md:flex items-baseline space-x-4" />
					</div>
					<MenuBtn isMenuOpen={isOpen} toggleMenu={toggleMenu} />
				</div>
				{isOpen ? (
					<NavMenu
						className="md:hidden space-y-1 pb-3 pt-2"
						onClick={closeMenu}
					/>
				) : null}
			</div>
		</header>
	);
};

export default Header;
