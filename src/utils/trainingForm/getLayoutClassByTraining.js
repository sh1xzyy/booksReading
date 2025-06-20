import clsx from 'clsx'

export const getLayoutClassByTraining = (s, isTraining) =>
	clsx(s.pageLayout, isTraining ? s.pageLayoutTraining : s.pageLayoutDefault)
