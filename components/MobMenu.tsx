const MobMenu = () => {
	return (
		<div className="md:hidden space-y-1 pb-3 pt-2">
			<a
				href="#"
				className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
				aria-current="page"
			>
				Pokemons
			</a>
			<a
				href="#"
				className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
			>
				Favorites
			</a>
		</div>
	);
};

export default MobMenu;
