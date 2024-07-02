'use client'

import {FC, ReactNode} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {MaterialIcon} from '../../ui/icons/MaterialIcon'
import {DarkModeMenuButton} from '../../ui/buttons/DarkModeMenuButton'
import {LogOutMenuButton} from '../../ui/buttons/LogOutMenuButton'

interface EmployeeHomePropsType {
	children: ReactNode
}

export const EmployeeLayout: FC<EmployeeHomePropsType> = ({children}) => {
	const pathname = usePathname()
	return (
		<div className='h-full w-full flex justify-center'>
			<div className="flex h-full" style={{maxWidth: '1186px', width: '1186px'}}>
				<div className="menu">
					<div>
						<div className="flex justify-center items-center h-12">
							<Link className="cl-link text-2xl" href="/">
								CRM Lite
							</Link>
						</div>
						<Link
							className={pathname === '/profile' ? 'menu-item menu-item-active' : 'menu-item'}
							href={'/profile'}>
							<MaterialIcon iconName="MdOutlinePerson" />
							Профиль
						</Link>
						{/*<Link*/}
						{/*	className={pathname.startsWith('/users') ? 'menu-item menu-item-active' : 'menu-item'}*/}
						{/*	href={'/users'}>*/}
						{/*	<MaterialIcon iconName="MdOutlinePeople" />*/}
						{/*	Пользователи*/}
						{/*</Link>*/}
					</div>
					<div>
						<DarkModeMenuButton />
						<LogOutMenuButton />
					</div>
				</div>
				{/*<div className='separator'></div>*/}
				<div className="h-full w-full">
					{children}
				</div>
			</div>
		</div>
	)
}
