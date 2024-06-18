import {FC} from 'react'

export const Body: FC = ({ children }: {children: React.ReactNode}) => {
	return <div className='flex flex-col items-center h-full pt-16 bg-gray-300 dark:bg-gray-800'>{children}</div>
}
