import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

export default function HomeHeader() {
	return (
		<header className='flex justify-end p-5 text-sm'>
			<div className='flex items-center space-x-4'>
				<Link href={'https://mail.google.com'} className='hover:underline'>
					Gmail
				</Link>
				<Link href={'https://image.google.com'} className='hover:underline'>
					Images
				</Link>
				<TbGridDots className='rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200' />
				<button className='rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-shadow hover:shadow-md hover:brightness-105'>
					Sign in
				</button>
			</div>
		</header>
	)
}
