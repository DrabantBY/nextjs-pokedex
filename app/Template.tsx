import Header from './components/Header';
import type { ReactNode } from 'react';

const Template = ({ children }: { children: ReactNode }) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />

			<main className="flex flex-col grow">{children}</main>
		</div>
	);
};

export default Template;
