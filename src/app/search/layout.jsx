import SearchHeader from '../../components/search-header'
import React, { Suspense } from 'react'

function Layout({ children }) {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<SearchHeader />
			</Suspense>
			{children}
		</div>
	)
}

export default Layout
