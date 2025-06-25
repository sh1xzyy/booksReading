import clsx from 'clsx'

export const getBookWrapperClassName = (s, isTraining) =>
	clsx(s.countWrapper, isTraining && s.trainingCountWrapper)
