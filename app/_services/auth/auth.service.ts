import {getContentType} from '_utils/api/api.helpers'
import axios from 'axios'
import Cookies from 'js-cookie'

import {API_URL, getAuthUrl} from '_config/api.config'

import {IAuthResponse} from '_store/user/user.interface'

import {removeTokensStorage, saveToStorage} from './auth.helper'

export const AuthService = {
	async register(email: string, password: string, role: string) {
		const response = await axios.post<IAuthResponse>(`${API_URL}${getAuthUrl('/registration')}`, {
			email,
			password,
			role
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	async login(email: string, password: string) {
		const response = await axios.post<IAuthResponse>(`${API_URL}${getAuthUrl('/login')}`, {
			email,
			password
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	},
	logout() {
		removeTokensStorage()
		localStorage.removeItem('user')
	},
	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const response = await axios.post<IAuthResponse>(
			`${API_URL}${getAuthUrl('/login/access_token')}`,
			{
				refreshToken
			},
			{
				headers: getContentType()
			}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	}
}
