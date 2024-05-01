/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{ protocol: 'https', hostname: 'www.freepnglogos.com' },
			{ protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '**' },
			{ protocol: 'https', hostname: 'm.media-amazon.com' },
			{ protocol: 'https', hostname: '**' },
			
		],
	},
}

export default nextConfig
