import Header from './Header';
import type { ReactNode } from 'react';

type TemplatePropsType = {
	children: ReactNode;
};

const Template = ({ children }: TemplatePropsType) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-auto px-4 sm:px-6 lg:px-8">{children}</main>
		</div>
	);
};

export default Template;
