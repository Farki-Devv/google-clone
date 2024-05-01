export default function Footer() {
	return (
		<footer className='absolute bottom-0 w-full bg-[#f2f2f2] text-sm text-gray-500'>
			<div className='border-b px-8 py-3'>Uzbekistan</div>
			<div className='flex flex-col items-center justify-between space-y-7 px-8 py-3 sm:flex-row sm:space-y-0'>
				<ul className='flex items-center space-x-6'>
					<li className='cursor-pointer hover:underline'>About</li>
					<li className='cursor-pointer hover:underline'>Advertising</li>
					<li className='cursor-pointer hover:underline'>Business</li>
					<li className='cursor-pointer hover:underline'>How Search works</li>
				</ul>
				<ul className='flex items-center space-x-6'>
					<li className='cursor-pointer hover:underline'>Privacy</li>
					<li className='cursor-pointer hover:underline'>Terms</li>
					<li className='cursor-pointer hover:underline'>Settings</li>
				</ul>
			</div>
		</footer>
	)
}
