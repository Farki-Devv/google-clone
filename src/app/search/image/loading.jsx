export default function loading() {
	return (
		<div className='mx-2 flex max-w-6xl flex-col pb-44 pt-10 sm:flex-row sm:space-x-4 lg:pl-52'>
			<div className='animate-pulse'>
				<div className='mb-4 size-48 rounded-md bg-gray-200'></div>
				<div className='mb-2.5 h-2 w-48 rounded-md bg-gray-200'></div>
				<div className='mb-2.5 h-2 w-48 rounded-md bg-gray-200'></div>
			</div>
			<div className='hidden sm:inline-flex sm:space-x-4'>
				<div className='animate-pulse'>
					<div className='mb-4 size-48 rounded-md bg-gray-200'></div>
					<div className='mb-2.5 h-2 w-48 rounded-md bg-gray-200'></div>
					<div className='mb-2.5 h-2 w-48 rounded-md bg-gray-200'></div>
				</div>
				<div className='animate-pulse'>
					<div className='mb-4 size-48 rounded-md bg-gray-200'></div>
					<div className='mb-2.5 h-2 w-48 rounded-md bg-gray-200'></div>
					<div className='mb-2.5 h-2 w-48 rounded-md bg-gray-200'></div>
				</div>
			</div>
		</div>
	)
}
