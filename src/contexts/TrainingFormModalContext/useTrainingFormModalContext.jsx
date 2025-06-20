import { createContext, useContext } from 'react'

export const TrainingFormModalContext = createContext()
export const useTrainingFormModalContext = () =>
	useContext(TrainingFormModalContext)
