// 'use client'

import {FC, useEffect, useState} from 'react'
import styles from './Header.module.scss'
import {Logo} from './Logo'
import {Menu} from './menu/Menu'
import {menu} from './menu/menu.data'
import {useAuth} from '_hooks/useAuth'
import {useActions} from '_hooks/useActions'
import Link from 'next/link'
import {MaterialIcon} from '_components/ui/icons/MaterialIcon'

export const Header: FC = props => {
	// const {user} = useAuth()
	// const {logout} = useActions()

	// const [userExists, setUserExists] = useState(
	// 	<Link href='/login'>
	// 		<MaterialIcon iconName='MdExplore' />
	// 		<span>Вход/Регистрация</span>
	// 	</Link>
	// )

	// useEffect(() => {
	// 	if (user)
	// 		setUserExists(
	// 			<div className='flex items-center gap-3'>
	// 				<div>
	// 					{user.email} {user.role}
	// 				</div>
	// 				<button className='ne-button' onClick={logout}>
	// 					Выйти
	// 				</button>
	// 			</div>
	// 		)
	// }, [])

	return (
		<div className={styles.header}>
			<div className='container flex items-center justify-between'>
				<div className={styles.left}>
					<Logo />
					<Menu menu={menu} />
				</div>
				<div className={styles.right}>{/* {userExists} */}</div>
			</div>
		</div>
	)
}
