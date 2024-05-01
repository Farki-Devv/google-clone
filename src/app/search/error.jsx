'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
	useEffect(() => {
		console.log('error', error)
	}, [error])
	return (
		<div className='flex flex-col items-center justify-center pt-10'>
			<h1 className='mb-4 text-3xl'>
				Something went wrong! or result not found
			</h1>
			<button className='text-blue-500'>
				<Link href={'/'}>Go to Home page</Link>{' '}
			</button>
		</div>
	)
}
