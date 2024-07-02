import {signOutHome} from '_components/server/sign'
import {FC, ReactNode} from 'react'
import { MaterialIcon } from '../icons/MaterialIcon'

export const LogOutMenuButton: FC = () => {
	return (
		<form action={signOutHome} className='flex'>
			<button className='cl-icon-button cl-icon-24 menu-item w-full menu-item-danger' type='submit'>
				<MaterialIcon iconName='MdLogout'/>Выйти
			</button>
		</form>
	)
}
