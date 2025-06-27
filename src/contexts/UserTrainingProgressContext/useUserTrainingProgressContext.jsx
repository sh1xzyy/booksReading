import { createContext, useContext } from 'react'

export const UserTrainingProgressContext = createContext()

export const useUserTrainingProgressContext = () =>
	useContext(UserTrainingProgressContext)
