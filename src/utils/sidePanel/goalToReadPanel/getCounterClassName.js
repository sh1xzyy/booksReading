import clsx from 'clsx'

export const getCounterClassName = (s, isTraining) =>
	clsx(isTraining ? s.trainingCounter : s.defaultCounter)
