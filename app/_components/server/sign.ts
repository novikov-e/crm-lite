'use server'

import {signIn} from '../../../auth'
import {signOut} from '../../../auth'

export const sign = async (email: string, password: string) => {
	await signIn('credentials', {email, password, redirectTo: '/'})
}

export const signOutHome = async () => {
	await signOut({redirectTo: '/login'})
}
