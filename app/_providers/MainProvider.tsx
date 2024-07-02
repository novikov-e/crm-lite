'use client'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {FC, ReactNode} from 'react'
import {ReduxToast} from './ReduxToast'
import {Provider} from 'react-redux'
import {store} from '_redux/store'
import {HeadProvider} from './HeadProvider/HeadProvider'
import {SessionProvider} from 'next-auth/react'
import {ThemeProvider} from 'next-themes'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export const MainProvider: FC<{children?: ReactNode}> = ({children}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<SessionProvider>
						<ThemeProvider attribute='class'>{children}</ThemeProvider>
					</SessionProvider>
					{/*<ReactQueryDevtools initialIsOpen={false} />*/}
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}
