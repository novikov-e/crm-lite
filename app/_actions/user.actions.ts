'use server'

import { UserRole } from '../_model/user/UserRole.enum'
import prisma from '_utils/db'
import { sendEmail } from '_utils/email'
import { hash, genSalt } from 'bcryptjs'
import { randomUUID } from 'crypto'


export const userRegistrationFromAdmin = async (email: string, password: string, role: string) => {
	console.log(`newUser(${email}, ${password}, ${role})`)
	await sendEmail(
		'noved256@yandex.ru',
		'Test subject',
		'Test text',
		`<a href="${process.env.APP_URL}/confirm_email/${randomUUID()}">Подтвердить адрес электронной почты</a>`
	)
	const salt = await genSalt(10)
	await prisma.user.create({
		data: {
			email,
			password: await hash(password, salt),
			role
		}
	})
}

export const sendMail = async () => {
	console.log('sendEmail');
	
  
}


export async function userRegistration(data: {email:string, password: string}) {
	
	//Валидация
	
	// console.log(`newUser(${data.email}, ${data.password})`)
	//Проверка есть ли пользователь с таким почтовым ящиком
	
	const user = await prisma.user.findUnique({
		where: {
			email: data.email
		}
	})
	console.log(user);
	if (!user) {
		const salt = await genSalt(10)
		await prisma.user.create({
			data: {
				email: data.email,
				password: await hash(data.password, salt),
				role: UserRole.CLIENT
			}
		})
		// await sendEmail(
		// 	'noved256@yandex.ru',
		// 	'Test subject',
		// 	'Test text',
		// 	`<a href="${process.env.APP_URL}/confirm_email/${randomUUID()}">Подтвердить адрес электронной почты</a>`
		// )
		return true
	} else {
		return false
	}
}

export const emailIsAvailable = async (email: string) => {}