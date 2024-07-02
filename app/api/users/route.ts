import prisma from '../../_utils/db'
import {IUserFields} from '../../_model/user/User.entity'

export async function GET(request: Request) {
	const users = await prisma.user.findMany({select: IUserFields})
	if (users) {
		return Response.json(users)
	}
	return Response.json({error: 'Internal sever error'}, {status: 500})
}


