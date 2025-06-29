import clsx from 'clsx'

export const setListClassByStatus = isTraining =>
	clsx(isTraining ? 'planningTrainListSection' : 'planningListSection')
