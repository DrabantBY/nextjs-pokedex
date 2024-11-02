import Header from '@/components/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="h-full bg-gray-100" lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
