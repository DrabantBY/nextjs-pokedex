import Link from 'next/link';

const NotFound = () => {
	return (
		<section className="flex-auto flex flex-col justify-center text-center">
			<h6 className="text-lg font-semibold text-gray-500">404</h6>
			<h2 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
				Page not found
			</h2>
			<p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
				Sorry, we couldn’t find the page you’re looking for.
			</p>

			<Link
				href="/"
				className="w-fit rounded-md px-3 py-2 mt-10 mx-auto text-sm capitalize font-sm bg-gray-800 text-white hover:bg-gray-700"
			>
				go back
			</Link>
		</section>
	);
};

export default NotFound;
