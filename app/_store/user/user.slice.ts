import {createSlice} from '@reduxjs/toolkit'

import {getStoreLocal} from '_utils/localStorage'

import {checkAuth, login, logout, registration} from './user.actions'
import {IInitialState} from './user.interface'

const initialState: IInitialState = {
	user: getStoreLocal('user'),
	isLoading: false
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(registration.pending, state => {
				state.isLoading = true
			})
			.addCase(registration.fulfilled, (state, {payload}) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(registration.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, {payload}) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, {payload}) => {
				state.user = payload.user
			})
	}
})

export const {reducer} = userSlice
