import clsx from 'clsx'

export const setTrainingModalClass = type =>
	clsx(type === 'completed' ? 'trainingBookReadModal' : 'trainingTimeoutModal')
