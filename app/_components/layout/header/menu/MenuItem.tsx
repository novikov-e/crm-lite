'use client'

import {FC} from 'react'
import styles from './MenuItem.module.scss'
import Link from 'next/link'
import {MaterialIcon} from '_components/ui/icons/MaterialIcon'
import {useRouter} from 'next/navigation'
import cn from 'classnames'
import {IMenuItem} from './menu.types'

export const MenuItem: FC<{item: IMenuItem}> = ({item}) => {
	const {asPath} = useRouter()

	return (
		<li
			// className={cn({
			// 	[styles.active]: asPath === item.link
			// })}
			className={styles.li}
		>
			<Link href={item.link}>
				<MaterialIcon iconName={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}
