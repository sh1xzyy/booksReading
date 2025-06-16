import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk } from './operations'

const initialState = {
	userData: {
		name: null,
		email: null,
	},
	accessToken: null,
	refreshToken: null,
	sid: null,
	isLoading: false,
	isLoggedIn: false,
	isRefreshing: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.userData = {
					name: action.payload.userData.name,
					email: action.payload.userData.email,
				}
				state.accessToken = action.payload.accessToken
				state.refreshToken = action.payload.refreshToken
				state.sid = action.payload.sid
				state.isLoading = false
				state.isLoggedIn = true
			})

			.addMatcher(isAnyOf(loginThunk.pending), state => {
				state.isLoading = true
			})
			.addMatcher(isAnyOf(loginThunk.rejected), state => {
				state.isLoading = false
			})
	},
})

export default authSlice.reducer
