import prisma from '../../_utils/db'
import {
	IUser,
	UserCreatedByAdminValidationSchema,
	UserUpdateByAdminValidationSchema
} from '../../_model/user/User.entity'
import {genSalt, hash} from 'bcryptjs'
import {emailConfirmation} from '../../_actions/email.actions'
import {cuidValidationSchema} from '../../_utils/validation/validation'

export async function POST(request: Request) {
	const user: IUser = await request.json()
	const validation = await UserCreatedByAdminValidationSchema.safeParseAsync(user)
	if (validation.success) {
		const userWithThisEmail = await prisma.user.findUnique({
			where: {
				email: user.email
			}
		})
		if (!userWithThisEmail) {
			const salt = await genSalt(10)
			await prisma.user.create({
				data: {
					email: user.email,
					password: await hash(user.password, salt),
					role: user.role,
					name: user.name,
					surname: user.surname
				}
			})
			await emailConfirmation()
			return Response.json({}, {status: 200})
		}
	}
	return Response.json({error: 'Error'}, {status: 400})
}

export async function PUT(request: Request) {
	const user: IUser = await request.json()
	const validation = await UserUpdateByAdminValidationSchema.safeParseAsync(user)
	if (validation.success) {
		await prisma.user.update({
			where: {id: user.id},
			data: {
				name: user.name,
				surname: user.surname,
				role: user.role
			}
		})
		return Response.json({}, {status: 200})
	}
	return Response.json({error: 'Bad request'}, {status: 400})
}

export async function DELETE(request: Request) {
	const {id} = await request.json()
	const validation = await cuidValidationSchema.safeParseAsync(id)
	if (validation.success) {
		const user = await prisma.user.delete({where: {id}})
		if (user) {
			return Response.json({}, {status: 200})
		}
	}
	return Response.json({error: 'User not found'}, {status: 400})
}