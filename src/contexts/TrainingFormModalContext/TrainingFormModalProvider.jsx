import { useState } from 'react'
import { TrainingFormModalContext } from './useTrainingFormModalContext'

export const TrainingFormModalProvider = ({ children }) => {
	const [isTrainingFormModalOpen, setIsTrainingFormModalOpen] = useState(false)
	return (
		<TrainingFormModalContext.Provider
			value={{ isTrainingFormModalOpen, setIsTrainingFormModalOpen }}
		>
			{children}
		</TrainingFormModalContext.Provider>
	)
}
