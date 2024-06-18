'use client'

import {FC} from 'react'
import {MaterialIcon} from '../icons/MaterialIcon'

import {useTheme} from 'next-themes'
export const DarkModeButton: FC = props => {
	const {theme, setTheme} = useTheme()

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<button onClick={changeTheme} className='darkModeButton'>
			{theme === 'light' ? (
				<MaterialIcon iconName='MdOutlineNightlight' />
			) : (
				<MaterialIcon iconName='MdOutlineWbSunny' />
			)}
		</button>
	)
}
