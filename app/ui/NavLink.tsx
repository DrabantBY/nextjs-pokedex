import Link from 'next/link';
import { memo } from 'react';

type NavLinkPropsType = {
	route: string;
	label: string;
	active: boolean;
};

const NavLink = ({ route, label, active }: NavLinkPropsType) => {
	const activeClasses = active
		? 'bg-gray-900 text-white'
		: 'text-gray-300 hover:bg-gray-700 hover:text-white';

	return (
		<Link
			href={route}
			className={`block bg-gray-800 rounded-md px-3 py-2 text-sm capitalize font-sm ${activeClasses}`}
			aria-current={active ? 'page' : active}
		>
			{label}
		</Link>
	);
};

export default memo(NavLink);
