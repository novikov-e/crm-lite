'use client'

import {FC,
	ReactNode,
	useEffect,
	useState
} from 'react'
import {MaterialIcon} from '../icons/MaterialIcon'
import {useTheme} from 'next-themes'

export const DarkModeIconButton: FC = props => {

	// const [button, setButton] = useState<ReactNode>()
	const {theme, setTheme} = useTheme()

	const changeTheme = () => {
		theme === 'light'
			? setTheme('dark')
			: setTheme('light')
	}

	// useEffect(() => {
	// 	switch (theme) {
	// 		case 'light':
	// 			setButton(
	// 				<button onClick={changeTheme} className="cl-icon-button cl-icon-24">
	// 					<MaterialIcon iconName="MdNightlight" />
	// 				</button>
	// 			)
	// 			break;
	// 		case 'dark':
	// 			setButton(
	// 				<button onClick={changeTheme} className="cl-icon-button cl-icon-24">
	// 					<MaterialIcon iconName="MdOutlineWbSunny" />
	// 				</button>
	// 			)
	// 			break;
	// 	}
	// }, [theme])
	//
	//
	// return <>{button}</>

	switch (theme) {
		case 'light':
			return (
				<button onClick={changeTheme} className="cl-icon-button cl-icon-24">
					<MaterialIcon iconName="MdNightlight" />
				</button>
			)
		case 'dark':
			return (
				<button onClick={changeTheme} className="cl-icon-button cl-icon-24">
					<MaterialIcon iconName="MdOutlineWbSunny" />
				</button>
			)
	}
}
