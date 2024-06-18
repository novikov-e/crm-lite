import {FC} from 'react'
import styles from './HeadProvider.module.scss'

import NextNProgress from 'nextjs-progressbar'
import {accentColor} from '_config/constants'
import Head from 'next/head'
import Favicons from './Favicons'

export const HeadProvider: FC = ({children}) => {
	return (
		<>
			<NextNProgress color={accentColor} startPosition={0.3} stopDelayMs={200} height={3} />
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
