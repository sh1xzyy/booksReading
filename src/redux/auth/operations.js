import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

export const authInstance = axios.create({
	baseURL: API_KEY,
})

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
