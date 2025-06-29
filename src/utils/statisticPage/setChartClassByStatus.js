import clsx from 'clsx'

export const setChartClassByStatus = isTraining =>
	clsx(isTraining ? 'planningChartSection' : 'chartSection')
