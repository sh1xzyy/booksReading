import clsx from 'clsx'

export const getCounterDescriptionClassName = (s, isTraining) =>
	clsx(isTraining ? s.trainingCounterDescription : s.defaultCounterDescription)
