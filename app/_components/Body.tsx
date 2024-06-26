import {FC} from 'react'

export const Body: FC<{children: React.ReactNode}> = ({children}) => {
	return <div className='flex flex-col items-center h-full pt-16'>{children}</div>
}
