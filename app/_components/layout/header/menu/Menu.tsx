import {FC} from 'react'

import styles from './Menu.module.scss'
import {MenuItem} from './MenuItem'
import {IMenu} from './menu.types'

export const Menu: FC<{menu: IMenu}> = ({menu: {items}}) => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.ul}>
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	)
}
