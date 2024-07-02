import {signOutHome} from '_components/server/sign'
import {FC, ReactNode} from 'react'
import { MaterialIcon } from '../icons/MaterialIcon'

export const LogOutIconButton: FC = () => {
	return (
		<form action={signOutHome} className='flex'>
			<button className='cl-icon-button cl-icon-24' type='submit'>
				<MaterialIcon iconName='MdLogout'/>
			</button>
		</form>
	)
}
