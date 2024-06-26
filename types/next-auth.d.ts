import NextAuth, {DefaultSession} from 'next-auth'

declare module "next-auth" {
	interface User {
		id: string
		email: string
		role: string
	}

	// interface Session {
	// 	user: {
	// 		id: string
	// 		role: string
	// 	}
	// }

	interface AdapterUser {
		id: string
		role: string
	}
}