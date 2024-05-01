import React from 'react'
import Error from '../error'
import WebSearchResult from '../../../components/web-search-result'

export default async function Page({ searchParams }) {
	const startIndex = searchParams.start || '1'
	await new Promise(resolve => setTimeout(resolve, 1000))
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
	)
	if (!response.ok) throw new Error('Failed to fetch data')
	const data = await response.json()
	const results = data.items
	if (!results) return <Error />
	return <div>{results && <WebSearchResult results={data} />}</div>
}
