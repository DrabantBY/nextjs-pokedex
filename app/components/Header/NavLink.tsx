import Link from 'next/link';

type NavLinkPropsType = {
	route: string;
	active: boolean;
};

const NavLink = ({ route, active }: NavLinkPropsType) => {
	const activeClasses = active
		? 'bg-gray-900 text-white'
		: 'text-gray-300 hover:bg-gray-700 hover:text-white';
	return (
		<Link
			href={route}
			className={`block rounded-md px-3 py-2 text-sm capitalize font-sm ${activeClasses}`}
			aria-current={active ? 'page' : active}
		>
			{route.slice(1)}
		</Link>
	);
};

export default NavLink;
