import { DEFAULT_PROGRESS } from './constants'

export const startTraining = type => {
	const prev =
		JSON.parse(localStorage.getItem('userProgress')) || DEFAULT_PROGRESS
	const updated = { ...prev, isTraining: type, hasFinishedTraining: !type }
	localStorage.setItem('userProgress', JSON.stringify(updated))
	return { updated }
}
