'use client'

import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export default function SearchBox() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const searchTerm = searchParams.get('searchTerm')
	const [term, setTerm] = useState(searchTerm || '')
	const handleSubmit = e => {
		e.preventDefault()
		if (!term.trim()) return
		router.push(`/search/web?searchTerm=${term}`)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='ml-10 mr-5 flex max-w-3xl grow items-center rounded-full border border-gray-200 px-6 py-3 shadow-lg'
		>
			<input
				type='text'
				className='w-full focus:outline-none'
				value={term}
				onChange={e => setTerm(e.target.value)}
				placeholder='Search to google clone🤫'
			/>
			<RxCross2
				className='cursor-pointer text-2xl text-gray-500 sm:mr-2'
				onClick={() => setTerm('')}
			/>
			<BsFillMicFill className='mr-3 hidden border-l-2 border-gray-300 pl-4  text-4xl text-blue-500 sm:inline-flex' />
			<AiOutlineSearch
				className='hidden cursor-pointer text-2xl text-blue-500 sm:inline-flex'
				onClick={handleSubmit}
			/>
		</form>
	)
}
