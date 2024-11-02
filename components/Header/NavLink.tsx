import Link from 'next/link';

type NavLinkPropsType = {
	route: string;
	label: string;
	isActive: boolean;
};

const NavLink = ({ route, label, isActive }: NavLinkPropsType) => {
	const activeClasses = isActive
		? 'bg-gray-900 text-white'
		: 'text-gray-300 hover:bg-gray-700 hover:text-white';
	return (
		<Link
			href={route}
			className={`block rounded-md px-3 py-2 text-sm font-medium ${activeClasses}`}
			aria-current={isActive ? 'page' : isActive}
		>
			{label}
		</Link>
	);
};

export default NavLink;
