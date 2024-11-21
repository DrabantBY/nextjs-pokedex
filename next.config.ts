import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	env: {
		BASE_URL: 'https://pokeapi.co/api/v2/',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				pathname:
					'/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/**',
			},
		],
	},
};

export default nextConfig;
