import clsx from 'clsx'

export const getLayoutClassByTraining = (s, isTraining = true) =>
	clsx(s.pageLayout, isTraining ? s.pageLayoutTraining : s.pageLayoutDefault)
