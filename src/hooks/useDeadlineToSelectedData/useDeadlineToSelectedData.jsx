import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useUserTrainingProgressContext } from '../../contexts/UserTrainingProgressContext/useUserTrainingProgressContext'
import { calculateTimeLeft } from '../../utils/timer/calculateTimeLeft'
import { selectPlannedData } from '../../redux/planning/selectors'

export const useDeadlineToSelectedData = () => {
	const { setIsTrainingTimeout } = useUserTrainingProgressContext()
	const { endDate } = useSelector(selectPlannedData)
	const [timeLeftToData, setTimeLeftToData] = useState(() =>
		calculateTimeLeft(endDate)
	)

	const isTimeLeft = Object.values(timeLeftToData).every(value => value === 0)

	useEffect(() => {
		if (isTimeLeft) {
			setIsTrainingTimeout(true)
		}
	}, [isTimeLeft, setIsTrainingTimeout])

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeftToData(calculateTimeLeft(endDate))
		}, 1000)

		return () => clearInterval(timer)
	}, [endDate])

	return { timeLeftToData }
}
