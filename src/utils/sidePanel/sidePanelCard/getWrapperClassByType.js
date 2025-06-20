import clsx from 'clsx'

export const getWrapperClassByType = (s, type, isTraining) =>
	clsx(
		s.panelWrapper,
		type === 'goalToRead' && s.goalToReadWrapper,
		type === 'goalToRead' && !isTraining && s.goalToReadTrainingWrapper,
		type === 'results' && s.resultsWrapper
	)
