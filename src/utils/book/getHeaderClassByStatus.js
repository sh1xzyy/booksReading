import clsx from 'clsx'

export const getHeaderClassByStatus = (s, status) =>
	clsx(
		status === 'planning'
			? s.planningHeaderList
			: status === 'finished'
			? s.finishingHeaderList
			: s.defaultHeaderList
	)
