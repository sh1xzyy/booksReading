import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPlannedData } from '../../../redux/planning/selectors'
import { calculateTimeLeft } from '../../../utils/timer/calculateTimeLeft.js'

export const useDeadlineToData = () => {
	const { endDate } = useSelector(selectPlannedData)
	const [timeLeftToData, setTimeLeftToData] = useState(() =>
		calculateTimeLeft(endDate)
	)

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeftToData(calculateTimeLeft(endDate))
		}, 1000)

		return () => clearInterval(timer)
	}, [endDate])

	return { timeLeftToData }
}
