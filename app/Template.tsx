import Header from './components/Header';
import type { ReactNode } from 'react';

const Template = ({ children }: { children: ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<main className="flex flex-col flex-auto px-4 sm:px-6 lg:px-8">
				{children}
			</main>
		</div>
	);
};

export default Template;
