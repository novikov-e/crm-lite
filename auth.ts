import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import {PrismaAdapter} from '@auth/prisma-adapter'
import prisma from '_utils/db'
import {hash, compare, genSalt} from 'bcryptjs'
import {User} from '_services/auth/dto/user.entity'
import {UserFields} from '_services/auth/dto/user.fields'

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
				// console.log('autorize')
				// console.log(credentials)

				const user = await prisma.user.findUnique({
					where: {email: credentials?.email as string},
					select: UserFields
				})
				if (!user) throw new Error('Пользователь с такими данными не был найден')
				const isValidPassword = await compare(credentials?.password as string, user.password)
				if (!isValidPassword) throw new Error('Пользователь с такими данными не был найден')
				// console.log(user)

				return user
			}
		})
	],
	pages: {
		signIn: '/login'
	},
	callbacks: {
		// async signIn({user, account, profile, email, credentials}) {
		// console.log('signIn')
		// console.log(user);

		// return '/home'
		// },
		// async redirect({url, baseUrl}) {
		// 	console.log('redirect');
		// 	console.log(url);
		// 	console.log(baseUrl);
			
			
			
		// 	// Allows relative callback URLs
		// 	if (url.startsWith('/')) return `${baseUrl}${url}`
		// 	// Allows callback URLs on the same origin
		// 	else if (new URL(url).origin === baseUrl) return url
		// 	return baseUrl
		// },
		jwt({token, trigger, session, user}) {
			// console.log('jwt')
			// console.log(user)
			// console.log(token)
			if (user) {
				token.id = user.id
				token.role = user.role
			}
			return token
		},
		session({session, token, trigger, newSession}) {
			// console.log('session')
			// console.log(token)

			// console.log(session)
			// console.log(token)
			session.user.role = token.role
			session.user.id = token.id
			// if (trigger === 'update' && newSession?.name) {
			// 	You can update the session in the database if it's not already updated.
			// 	await adapter.updateUser(session.user.id, { name: newSession.name })

			// 	Make sure the updated value is reflected on the client
			// 	session.name = newSession.name
			// }
			return session
		}
	}
})
