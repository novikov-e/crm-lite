import {UserRole} from './app/_model/user/UserRole.enum'
import {auth} from './auth'

const adminPaths: string[] = [
	'/',
	'/api/auth/session',
	'/api/confirm_email/',
	'/api/profile',
	'/api/user',
	'/api/user/by_id',
	'/api/users',
	'/profile',
	'/services',
	'/users',
	'/user',
	'/user/by_id'
]
const employeePaths: string[] = [
	'/',
	'/api/auth/session',
	'/api/profile',
	'/profile'
]
const clientPaths: string[] = [
	'/',
	'/api/auth/session',
	'/api/profile',
	'/profile'
]

export default auth(req => {
	// console.log('middleware')
	// console.log(req.nextUrl.pathname)
	// console.log(adminPaths.includes(req.nextUrl.pathname))
	
	const loginUrl = new URL('/login', req.nextUrl.origin)
	const notFoundUrl = new URL('/not-found', req.nextUrl.origin)

	if (!req.auth && req.nextUrl.pathname !== '/login') {
		return Response.redirect(loginUrl)
	} else {
		switch (req.auth?.user?.role) {
			case UserRole.ADMIN:
				if (!adminPaths.includes(req.nextUrl.pathname)) {
					return Response.redirect(notFoundUrl)
				}
				break;
			case UserRole.EMPLOYEE:
				if (!employeePaths.includes(req.nextUrl.pathname)) {
					return Response.redirect(notFoundUrl)
				}
				break
			case UserRole.CLIENT:
				if (!clientPaths.includes(req.nextUrl.pathname)) {
					return Response.redirect(notFoundUrl)
				}
				break
		}
	}
})

export const config = {
	matcher: [
		'/api/confirm_email',
		'/api/profile',
		'/api/user:path*',
		'/api/users',
		'/users:path*',
		'/confirm_email',
		'/profile',
		'/services',
		'/socket',
		'/users:path*'
	]
}
