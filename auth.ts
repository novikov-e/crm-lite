import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from '_utils/db'
import {compare} from 'bcryptjs'
import {LoginValidationSchema} from './app/_model/user/User.entity'

export const {handlers, signIn, signOut, auth} = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: {strategy: 'jwt', maxAge: 30 * 24 * 60 * 60},
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {}
			},
			authorize: async credentials => {
				const validation = await LoginValidationSchema.safeParseAsync(credentials)
				if (validation.success) {
					const user = await prisma.user.findUnique({
						where: {email: credentials?.email as string},
						select: {id: true, email: true, password: true, role: true}
					})
					if (!user) throw new Error('Пользователь с такими данными не был найден')
					const isValidPassword = await compare(credentials?.password as string, user.password)
					if (!isValidPassword) throw new Error('Пользователь с такими данными не был найден')
					return user
				}
				return null
			}
		})
	],
	pages: {
		signIn: '/login'
	},
	callbacks: {
		jwt({token, user}) {
			if (user) {
				token.id = user.id
				token.role = user.role
			}
			return token
		},
		session({session, token}) {
			session.user.role = token.role as string
			session.user.id = token.id as string
			return session
		}
	}
})
