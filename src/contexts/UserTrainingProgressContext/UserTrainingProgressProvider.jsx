import { useState } from 'react'
import { UserTrainingProgressContext } from './useUserTrainingProgressContext'

export const UserTrainingProgressProvider = ({ children }) => {
	const [isTrainingTimeout, setIsTrainingTimeout] = useState(false)
	const [isBookReadModalOpen, setIsBookReadModalOpen] = useState(false)

	return (
		<UserTrainingProgressContext.Provider
			value={{
				isTrainingTimeout,
				setIsTrainingTimeout,
				isBookReadModalOpen,
				setIsBookReadModalOpen,
			}}
		>
			{children}
		</UserTrainingProgressContext.Provider>
	)
}
