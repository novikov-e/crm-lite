import {signOutHome} from '_components/server/sign'
import {FC, ReactNode} from 'react'
import { MaterialIcon } from '../icons/MaterialIcon'

export const LogOutButton: FC = () => {
	return (
		<form action={signOutHome} className='flex'>
			<button className='darkModeButton' type='submit'>
				<MaterialIcon iconName='MdLogout'/>
			</button>
		</form>
	)
}
