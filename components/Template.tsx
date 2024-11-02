import Header from './Header';
import type { ReactNode } from 'react';

type TemplatePropsType = {
	children: ReactNode;
};

const Template = ({ children }: TemplatePropsType) => {
	return (
		<div className="min-h-full flex flex-col">
			<Header />
			<main className="flex-auto">
				<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
					{children}
				</div>
			</main>
		</div>
	);
};

export default Template;
