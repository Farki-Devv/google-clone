import React from 'react'
import Error from '../error'
import WebSearchResult from '../../../components/web-search-result'

export default async function Page({ searchParams }) {
	const response = await fetch(
		`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
	)
	if (!response.ok) throw new Error('Failed to fetch data')
	const data = await response.json()
	const results = data.items
	if (!results) return <Error />
	return <div>{results && <WebSearchResult results={data} />}</div>
}

