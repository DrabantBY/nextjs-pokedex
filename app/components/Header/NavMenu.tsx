import { usePathname } from 'next/navigation';
import { memo } from 'react';
import NavLink from './NavLink';

type NavMenuPropsType = {
	className: string;
	onClick?: () => void;
};

const NavMenu = (props: NavMenuPropsType) => {
	const pathname = usePathname();
	const links = [
		{ route: '/pokemon', active: pathname === '/pokemon' },
		{ route: '/favorites', active: pathname === '/favorites' },
	];

	return (
		<nav {...props}>
			{links.map((link) => (
				<NavLink key={link.route} {...link} />
			))}
		</nav>
	);
};

export default memo(NavMenu);
