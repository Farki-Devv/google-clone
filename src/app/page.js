import HomeHeader from '../components/home-header'
import HomeSearch from '../components/home-search'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<HomeHeader />
			<div className='mt-24 flex flex-col items-center'>
				<Image
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
					alt='Google Logo'
					width={300}
					height={100}
					priority
					style={{ width: 'auto' }}
				/>
				<HomeSearch />
			</div>
		</>
	)
}
