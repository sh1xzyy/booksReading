import { useEffect, useState } from 'react'
import { checkboxToggle } from '../../features/userProgress/checkboxToggle'
import { startTraining } from '../../features/userProgress/startTraining'
import { DEFAULT_PROGRESS } from '../../features/userProgress/constants'
import { addResult } from '../../features/userProgress/addResult'
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

	const handleAddResult = value => {
		const { updated } = addResult(value)
		setUserProgress(updated)
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
				handleAddResult,
			}}
		>
			{children}
		</UserProgressContext.Provider>
	)
}
