import { memo } from 'react';
import { usePathname } from 'next/navigation';
import NavLink from '@/app/ui/NavLink';

type NavMenuPropsType = {
	className: string;
	onClick?: () => void;
};

const NavMenu = (props: NavMenuPropsType) => {
	const pathname = usePathname();

	const links = [
		{ route: '/pokemon', label: 'pokemon', active: pathname === '/pokemon' },
		{
			route: '/favorites',
			label: 'favorites',
			active: pathname === '/favorites',
		},
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
