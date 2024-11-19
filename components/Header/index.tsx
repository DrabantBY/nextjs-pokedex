import Logo from './Logo';
import NavMenu from './NavMenu';

const Header = () => {
	return (
		<header className="bg-gray-800">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center">
					<Logo />
					<NavMenu className="ml-10 flex items-center space-x-4" />
				</div>
			</div>
		</header>
	);
};

export default Header;
