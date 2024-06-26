import {IAuthResponse, IEmailPassword} from './user.interface'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {errorCatch} from '_utils/api/api.helpers'
import {toastr} from 'react-redux-toastr'

import {UserService} from '_services/auth/user.service'

import {toastError} from '_utils/api/withToastrErrorRedux'

export const registration = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({email, password, role}, thunkAPI) => {
		try {
			// const response = await AuthService.register(email, password, role)
			toastr.success('Registration', 'Completed successfully')
			// return response.data
			return {test: 'test'}
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({email, password}, thunkAPI) => {
		try {
			const response = await UserService.login(email, password)
			toastr.success('Login', 'Completed successfully')
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await UserService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkAPI) => {
	try {
		const response = await UserService.getNewTokens()
		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			toastr.error('Logout', 'Your authorizaiton is finished, plz sign in again')
			thunkAPI.dispatch(logout())
		}
		return thunkAPI.rejectWithValue(error)
	}
})
