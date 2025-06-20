import clsx from 'clsx'

export const getListClassName = (s, isTraining) =>
	clsx(!isTraining && s.defaultCountList, isTraining && s.trainingCountList)
