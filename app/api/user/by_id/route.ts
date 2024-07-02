import prisma from '../../../_utils/db'
import {IUserFields} from '../../../_model/user/User.entity'
import {cuidValidationSchema} from '../../../_utils/validation/validation'

export async function POST(request: Request) {
	const {id} = await request.json()
	const validation = await cuidValidationSchema.safeParseAsync(id)
	if (validation.success) {
		const user = await prisma.user.findUnique({where: {id}, select: IUserFields})
		if (user) {
			return Response.json({...user, password: ''})
		}
	}
	return Response.json({error: 'Bad request'}, {status: 400})
}