import {getContentType} from '_utils/api/api.helpers'
import axios from 'axios'
import Cookies from 'js-cookie'
// import {API_URL, getAuthUrl} from '_config/api.config'
import {IAuthResponse} from '_redux/user/user.interface'
import {removeTokensStorage, saveToStorage} from './auth.helper'
import {CreateUserDto} from './dto/create-user.dto'
import prisma from '_utils/db'
import {genSalt, hash} from 'bcryptjs'
import {User} from './dto/user.entity'
import {UserFields} from './dto/user.fields'
import {PairTokens} from './dto/PairTokens.entity'

export const UserService = {
	async register(dto: CreateUserDto) {
		// const response = await axios.post<IAuthResponse>(`${API_URL}${getAuthUrl('/registration')}`, {
		// 	email,
		// 	password,
		// 	role
		// })

		// if (response.data.accessToken) {
		// 	saveToStorage(response.data)
		// }

		// return response

		const {email, password, role} = dto
		const isHaveUser = await prisma.user.findUnique({
			where: {
				email
			}
		})
		if (isHaveUser) {
			throw new Error('Пользователь с таким почтовым ящиком уже существует')
		}
		const salt = await genSalt(10)
		const user: User = await prisma.user.create({
			data: {
				email,
				password: await hash(password, salt),
				role
			},
			select: UserFields
		})
		const tokens: PairTokens = this.issueTokenPair(user.id)
		return {user: this.getUserFields(user), ...tokens}
	},
	// async login(email: string, password: string) {
	// 	const response = await axios.post<IAuthResponse>(`${API_URL}${getAuthUrl('/login')}`, {
	// 		email,
	// 		password
	// 	})

	// 	if (response.data.accessToken) {
	// 		saveToStorage(response.data)
	// 	}

	// 	return response
	// },
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		// const refreshToken = Cookies.get('refreshToken')
		// const response = await axios.post<IAuthResponse>(
		// 	`${API_URL}${getAuthUrl('/login/access_token')}`,
		// 	{
		// 		refreshToken
		// 	},
		// 	{
		// 		headers: getContentType()
		// 	}
		// )
		// if (response.data.accessToken) {
		// 	saveToStorage(response.data)
		// }
		// return response
	},

	async issueTokenPair(userId: string): PairTokens {
		const data = {id: userId}
		const refreshToken = await this.jwtService.signAsync(data, {expiresIn: '15d'})
		const accessToken = await this.jwtService.signAsync(data, {expiresIn: '1h'})
		return {refreshToken, accessToken}
	},

	getUserFields(user: User) {
		return {
			id: user.id,
			email: user.email,
			role: user.role
		}
	}
}
