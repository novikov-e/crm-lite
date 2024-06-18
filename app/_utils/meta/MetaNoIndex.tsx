import {FC} from 'react'
import Head from 'next/head'

// TODO console.table()

import {titleMerge} from '_config/seo.config'

export const MetaNoIndex: FC<{title?: string}> = ({title = 'Error'}) => {
	return (
		<Head>
			<title>{titleMerge(title)}</title>
			<meta name='robots' content='noindex, nofollow' />
		</Head>
	)
}
