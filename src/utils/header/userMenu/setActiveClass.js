import clsx from 'clsx'

export const setActiveClass = (s, isActive) =>
	clsx(s.navLink, isActive && s.active)
