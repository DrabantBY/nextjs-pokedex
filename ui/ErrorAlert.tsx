import NavLink from '@/ui/NavLink';

type ErrorAlertPropsType = {
	message: string;
};

const ErrorAlert = ({ message }: ErrorAlertPropsType) => {
	return (
		<section className="flex flex-col grow justify-center items-center text-center">
			<h6 className="mb-4 text-lg font-semibold text-gray-500">404</h6>

			<h2 className="mb-6 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
				{message}
			</h2>

			<p className="mb-10 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
				Sorry, we couldn’t find the page you’re looking for.
			</p>

			<NavLink route="/" label="go back" active={false} />
		</section>
	);
};

export default ErrorAlert;
