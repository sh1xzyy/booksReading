import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

export const authInstance = axios.create({
	baseURL: API_KEY,
})

export const registerThunk = createAsyncThunk(
	'auth/register',
	async (body, thunkAPI) => {
		try {
			const response = await authInstance.post('/auth/register', body)
			thunkAPI.dispatch(
				loginThunk({ email: body.email, password: body.password })
			)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message)
		}
	}
)

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (body, thunkAPI) => {
		try {
			const response = await authInstance.post('/auth/login', body)
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message)
		}
	}
)

export const logoutThunk = createAsyncThunk(
	'/auth/logout',
	async (_, thunkAPI) => {
		try {
			const { accessToken } = thunkAPI.getState().auth
			if (!accessToken) {
				return thunkAPI.rejectWithValue('No accessToken')
			}

			const response = await authInstance.post('/auth/logout', null, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			})
			return response.data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.response.data.message)
		}
	}
)
