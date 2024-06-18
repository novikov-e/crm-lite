'use server'

import prisma from '_utils/db'

export async function newUser(email: string, password: string, role: string) {
	console.log(`newUser(${email}, ${password}, ${role})`)

	await prisma.user.create({
		data: {
			email,
			password,
			role
		}
	})
}
