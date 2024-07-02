import { PrismaClient } from '@prisma/client'
import { hash, genSalt } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
	const salt = await genSalt(10)
	const password = await hash('1!Qwerty', salt)

	const admin = await prisma.user.upsert({
		where: { email: 'admin@test.ru' },
		update: {},
		create: {
			email: 'admin@test.ru',
			password,
			name: 'Egor',
			surname: 'Novikov',
			role: 'ADMIN'
		},
	})

	const employee = await prisma.user.upsert({
		where: { email: 'employee@test.ru' },
		update: {},
		create: {
			email: 'employee@test.ru',
			password,
			name: 'Egor',
			surname: 'Novikov',
			role: "EMPLOYEE"
		},
	})

	const client = await prisma.user.upsert({
		where: { email: 'client@test.ru' },
		update: {},
		create: {
			email: 'client@test.ru',
			password,
			name: 'Egor',
			surname: 'Novikov',
			role: "CLIENT"
		},
	})
	console.log({ admin, employee, client })
}
main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})