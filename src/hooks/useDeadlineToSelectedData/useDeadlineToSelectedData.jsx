import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useUserTrainingProgressContext } from '../../contexts/UserTrainingProgressContext/useUserTrainingProgressContext'
import { useUserProgressContext } from '../../contexts/UserProgressContext/useUserProgressContext'
import { calculateTimeLeft } from '../../utils/timer/calculateTimeLeft'
import { selectPlannedData } from '../../redux/planning/selectors'

export const useDeadlineToSelectedData = () => {
	const { setIsTrainingTimeout } = useUserTrainingProgressContext()
	const { handleClearProgress, checkedItemList } = useUserProgressContext()
	const { endDate, plannedBooks } = useSelector(selectPlannedData)
	const [timeLeftToData, setTimeLeftToData] = useState(() =>
		calculateTimeLeft(endDate)
	)

	useEffect(() => {
		const timer = setInterval(() => {
			const updatedTime = calculateTimeLeft(endDate)
			setTimeLeftToData(updatedTime)

			const isTimeLeft = Object.values(updatedTime).every(value => value === 0)

			if (isTimeLeft) {
				clearInterval(timer)

				if (plannedBooks.length === checkedItemList.length) {
					handleClearProgress()
				} else {
					handleClearProgress()
					setIsTrainingTimeout(true)
				}
			}
		}, 1000)

		return () => clearInterval(timer)
	}, [
		endDate,
		plannedBooks,
		checkedItemList,
		handleClearProgress,
		setIsTrainingTimeout,
	])

	return { timeLeftToData }
}
