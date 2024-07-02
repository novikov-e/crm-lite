import NextAuth, {DefaultSession} from 'next-auth'

declare module "next-auth" {
	interface User {
		id: string
		email: string
		role: string
	}

	// interface Session {
	// 	profile: {
	// 		id: string
	// 		role: string
	// 	}
	// }

	interface AdapterUser {
		id: string
		role: string
	}
}