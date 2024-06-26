'use client'

import { FC, ReactNode } from 'react'
import NextNProgress from 'nextjs-progressbar'
import Head from 'next/head'
import Favicons from './Favicons'

export const HeadProvider: FC<{children: ReactNode}> = ({children}) => {
	return (
		<>
			<NextNProgress color='#e30b13' startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true}/>
			<Head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0' />
				<Favicons />
				<meta name='theme-color' content={'#181B1E'} />
				<meta name='msapplication-navbutton-color' content={'#181B1E'} />
				<meta name='apple-mobile-web-app-status-bar-style' content={'#181B1E'} />
			</Head>
			{children}
		</>
	)
}
