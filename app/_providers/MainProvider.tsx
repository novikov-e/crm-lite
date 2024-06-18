import {Layout} from '_components/layout/Layout'
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {FC, ReactNode} from 'react'
// import {ReduxToast} from './ReduxToast'
import {Provider} from 'react-redux'
import {store} from '_store/store'
import {HeadProvider} from './HeadProvider/HeadProvider'

// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			refetchOnWindowFocus: false
// 		}
// 	}
// })

export const MainProvider: FC<{children?: ReactNode}> = ({children}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				{/* <QueryClientProvider client={queryClient}> */}
					{/* <ReduxToast /> */}
					<Layout>{children}</Layout>
				{/* </QueryClientProvider> */}
			</Provider>
		</HeadProvider>
	)
}
