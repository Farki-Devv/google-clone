import SearchHeader from '../../components/search-header'
import React from 'react'

function Layout({ children }) {
	return (
		<div>
			<SearchHeader />
			{children}
		</div>
	)
}

export default Layout
