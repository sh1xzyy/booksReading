import clsx from 'clsx'

export const getCounterClassName = (s, isTraining) =>
	clsx(!isTraining && s.defaultCounter, isTraining && s.trainingCounter)
