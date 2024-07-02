'use client'

import {FC, ReactNode, useEffect, useState} from 'react'
import {MaterialIcon} from '../icons/MaterialIcon'

import {useTheme} from 'next-themes'

export const DarkModeMenuButton: FC = props => {

	const [button, setButton] = useState<ReactNode>()
	const {theme, setTheme} = useTheme()

	const changeTheme = () => {
		theme === 'light'
			? setTheme('dark')
			: setTheme('light')
	}

	useEffect(() => {
		switch (theme) {
			case 'light':
				setButton(
					<button onClick={changeTheme} className="menu-item w-full">
						<MaterialIcon iconName="MdNightlight" />
						Тёмная тема
					</button>
				)
				break;
			case 'dark':
				setButton(
					<button onClick={changeTheme} className="menu-item w-full">
						<MaterialIcon iconName="MdOutlineWbSunny" />
						Светлая тема
					</button>
				)
				break;
		}
	}, [theme])

	return <>{button}</>
}
