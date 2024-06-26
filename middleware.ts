import {UserRole} from './app/_model/user/UserRole.enum'
import {auth} from './auth'

const adminPaths: string[] = ['/', '/home', '/api/auth/session', '/api/hello', '/services', '/users']
const employeePaths: string[] = ['/', '/home', '/api/auth/session']
const clientPaths: string[] = ['/', '/home', '/api/auth/session']

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

// '/api/:path*'
export const config = {
	matcher: ['/home']
}
