import { useEffect, useState } from 'react'
import { checkboxToggle } from '../../features/userProgress/checkboxToggle'
import { clearProgress } from '../../features/userProgress/clearProgress'
import { startTraining } from '../../features/userProgress/startTraining'
import { DEFAULT_PROGRESS } from '../../features/userProgress/constants'
import { UserProgressContext } from './useUserProgressContext'

export const UserProgressProvider = ({ children }) => {
	const [userProgress, setUserProgress] = useState(DEFAULT_PROGRESS)
	const { isTraining, checkedItemList, statistics, hasFinishedTraining } =
		userProgress || DEFAULT_PROGRESS

	useEffect(() => {
		const stored =
			JSON.parse(localStorage.getItem('userProgress')) ?? DEFAULT_PROGRESS
		setUserProgress(stored)
	}, [])

	const handleStartTraining = type => {
		const { updated } = startTraining(type)
		setUserProgress(updated)
	}

	const handleCheckboxToggle = (isChecked, _id) => {
		const { updated } = checkboxToggle(checkedItemList, isChecked, _id)
		setUserProgress(updated)
	}

	const handleClearProgress = () => {
		clearProgress()
		setUserProgress(DEFAULT_PROGRESS)
	}
	return (
		<UserProgressContext.Provider
			value={{
				isTraining,
				checkedItemList,
				statistics,
				hasFinishedTraining,
				handleStartTraining,
				handleCheckboxToggle,
				handleClearProgress,
			}}
		>
			{children}
		</UserProgressContext.Provider>
	)
}
