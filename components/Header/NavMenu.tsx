import { usePathname } from 'next/navigation';
import NavLink from './NavLink';

type NavMenuPropsType = {
	className: string;
};

const NavMenu = (props: NavMenuPropsType) => {
	const pathname = usePathname();
	return (
		<nav {...props}>
			<NavLink route={'/'} label={'Pokemons'} isActive={pathname === '/'} />
			<NavLink
				route={'/favorites'}
				label={'Favorites'}
				isActive={pathname === '/favorites'}
			/>
		</nav>
	);
};

export default NavMenu;
