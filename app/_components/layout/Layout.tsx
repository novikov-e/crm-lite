import {FC, ReactNode} from 'react'
import styles from './Layout.module.scss'
import {Sidebar} from './sidebar/Sidebar'
import {Header} from './header/Header'

export const Layout: FC<{children?: ReactNode}> = ({children}) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div>{children}</div>
			<Sidebar />
		</div>
	)
}
