'use client'

import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'

export default function HomeSearch() {
	const [input, setInput] = useState('')
	const [randomSearchLoading, setRandomSearchLoading] = useState(false)
	const router = useRouter()
	const handleSubmit = e => {
		e.preventDefault()
		if (!input.trim()) return
		router.push(`/search/web?searchTerm=${input}`)
	}

	const randomSearch = async e => {
		setRandomSearchLoading(true)
		const response = await fetch('https://random-word-api.herokuapp.com/word')
			.then(res => res.json())
			.then(data => data[0])
		if (!response) return
		router.push(`/search/web?searchTerm=${response}`)
		setRandomSearchLoading(false)
	}
	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='mx-auto mt-5 flex w-full max-w-[90%] rounded-full border border-gray-200 px-5 py-3 transition-shadow focus-within:shadow-md hover:shadow-md sm:max-w-xl lg:max-w-2xl'
			>
				<AiOutlineSearch className='mr-3 text-xl text-gray-500' />
				<input
					type='text'
					className='grow focus:outline-none'
					onChange={e => setInput(e.target.value)}
				/>
				<BsFillMicFill className='text-lg' />
			</form>
			<div className='mt-8 flex flex-col justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
				<button
					className='h-10 w-36 rounded-md bg-[#f8f9fa] text-sm text-gray-800 transition-shadow hover:shadow-md hover:ring-gray-200 focus:outline-none active:ring-gray-300'
					onClick={handleSubmit}
				>
					Google Search
				</button>
				<button
					disabled={randomSearchLoading}
					className='h-10 w-36 rounded-md bg-[#f8f9fa] text-sm text-gray-800 transition-shadow hover:shadow-md hover:ring-gray-200 focus:outline-none active:ring-gray-300 disabled:opacity-80 disabled:shadow-sm'
					onClick={randomSearch}
				>
					{randomSearchLoading ? 'Loading...' : 'I am feeling lucky'}
				</button>
			</div>
		</>
	)
}
