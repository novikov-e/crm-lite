import prisma from '../../_utils/db'
import {auth} from '../../../auth'
import {EditProfileValidationSchema, IUser, IUserFields} from '../../_model/user/User.entity'

export async function GET() {
	const session = await auth()
	if (session?.user) {
		const user = await prisma.user.findUnique({
			where: {id: session.user?.id},
			select: IUserFields
		})
		return Response.json({...user, password: ''})
	}
	return Response.json({error: 'User not found'}, {status: 400})
}

export async function PUT(request: Request) {
	const session = await auth()
	if (session?.user) {
		const user: IUser = await request.json()
		const validation = await EditProfileValidationSchema.safeParseAsync(user)
		if (validation.success) {
			await prisma.user.update({
				where: {id: session?.user.id},
				data: {
					name: user.name,
					surname: user.surname
				}
			})
			return Response.json({}, {status: 200})
		}
	}
	return Response.json({error: 'Bad request'}, {status: 400})
}
