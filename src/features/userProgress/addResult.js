import { DEFAULT_PROGRESS } from './constants'

export const addResult = value => {
	const prev =
		JSON.parse(localStorage.getItem('userProgress')) || DEFAULT_PROGRESS

	const currentTime = new Date().toLocaleTimeString('uk-UA', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	})

	const updateStatistics = [
		...(prev.statistics || []),
		{ ...value, time: currentTime },
	]

	const updated = {
		...prev,
		statistics: updateStatistics,
	}
	localStorage.setItem('userProgress', JSON.stringify(updated))
	return { updated }
}
