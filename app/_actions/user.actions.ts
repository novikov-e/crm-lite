'use server'

import {UserRole} from '../_model/user/UserRole.enum'
import prisma from '_utils/db'
import {hash, genSalt} from 'bcryptjs'
import {emailConfirmation} from './email.actions'
import {LoginValidationSchema} from '../_model/user/User.entity'
import {signIn} from '../../auth'

export async function userRegistration(data: {email: string, password: string}) {
	const validation = await LoginValidationSchema.safeParseAsync(data)
	if (validation.success) {
		const user = await prisma.user.findUnique({
			where: {
				email: data.email
			}
		})
		if (user) throw new Error('Пользователь с таким адресом электронной почты уже зарегистрирован')
		const salt = await genSalt(10)
		await prisma.user.create({
			data: {
				email: data.email,
				password: await hash(data.password, salt),
				role: UserRole.CLIENT
			}
		})
		await signIn('credentials', {email: data.email, password: data.password, redirectTo: '/'})
		// await emailConfirmation()
	}
}