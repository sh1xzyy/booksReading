import clsx from 'clsx'

export const getInfoListClass = (s, status) =>
	clsx(
		status === 'planning'
			? s.planningInfoList
			: status === 'finished'
			? s.finishedInfoList
			: s.defaultInfoList
	)
