import {FC, ReactNode} from 'react'
import Link from 'next/link'

interface AdminHomePropsType {
	children: ReactNode
}

export const AdminLayout: FC<AdminHomePropsType> = ({children}) => {

	return (
		<div className='flex h-full' style={{maxWidth: '1186px', width: '1186px'}}>
			<div className='flex flex-col border-r border-neutral-800 dark:border-gray-300 w-48'>
				<Link href={'/profile'}>Profile</Link>
				<Link href={'/users'}>Users</Link>
			</div>
			<div className='h-full w-full'>
				{children}
			</div>
		</div>
	)
}
