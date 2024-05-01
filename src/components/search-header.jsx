import Image from 'next/image'
import Link from 'next/link'
import SearchBox from './search-box'
import { RiSettings3Line } from 'react-icons/ri'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './search-header-options'

export default function SearchHeader() {
	return (
		<header className='sticky top-0 bg-white'>
			<div className='flex w-full items-center justify-between p-6'>
				<Link href='/'>
					<Image
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
						alt='Google Logo'
						width={120}
						height={40}
						priority
						style={{ width: 'auto' }}
					/>
				</Link>
				<div className='flex-1'>
					<SearchBox />
				</div>
				<div className='hidden space-x-2 md:inline-flex'>
					<RiSettings3Line className='cursor-pointer rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200' />
					<TbGridDots className='cursor-pointer rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200' />
				</div>
				<button className='ml-2 rounded-md bg-blue-500 px-6 py-2 font-medium text-white transition-shadow hover:shadow-md hover:brightness-105'>
					Sign in
				</button>
			</div>
			<SearchHeaderOptions />
		</header>
	)
}
