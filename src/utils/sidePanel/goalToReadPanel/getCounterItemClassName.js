import clsx from 'clsx'

export const getCounterItemClassName = (s, isTraining) =>
	clsx(isTraining ? s.trainingCountItem : s.defaultCountItem)
