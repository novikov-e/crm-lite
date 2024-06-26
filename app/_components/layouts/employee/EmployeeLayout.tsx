'use client'

import {FC, ReactNode} from 'react'
import {signOutHome} from '../../server/sign'
import Link from 'next/link'

interface EmployeeHomePropsType {
	children: ReactNode
}

export const EmployeeLayout: FC<EmployeeHomePropsType> = ({children}) => {
	return (
		<div className='flex h-full' style={{maxWidth: '1186px', width: '1186px'}}>
			<div className='flex flex-col border-r border-neutral-800 dark:border-gray-300 w-48'>
				<Link href={'/profile'}>Profile</Link>
			</div>
			<div className='h-full w-full'>
				{children}
			</div>
		</div>
	)
}
