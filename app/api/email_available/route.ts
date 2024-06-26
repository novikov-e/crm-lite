import prisma from '../../_utils/db'

export async function POST(request: Request) {
	const {email} = await request.json()
	const user = await prisma.user.findUnique({where: {email}})
	if (!user) {
		return Response.json({isAvailable: true})
	}
	return Response.json({isAvailable: false})
}
