import { useEffect, useState } from 'react'
import { calculateRemainingTimeToNewYear } from '../../utils/timer/calculateRemainingTimeToNewYear'

export const useDeadlineToNewYear = () => {
	const [timeLeftToNewYear, setTimeLeftToNewYear] = useState(
		calculateRemainingTimeToNewYear()
	)
	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeftToNewYear(calculateRemainingTimeToNewYear())
		}, 1000)

		return () => clearInterval(timer)
	}, [])
	return { timeLeftToNewYear }
}
