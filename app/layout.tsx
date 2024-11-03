import localFont from 'next/font/local';
import Template from '@/app/Template';
import StoreProvider from './StoreProvider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Pokedex',
	description: 'test task from SagTech',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html className="h-full bg-gray-100" lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
			>
				<StoreProvider>
					<Template>{children}</Template>
				</StoreProvider>
			</body>
		</html>
	);
}
