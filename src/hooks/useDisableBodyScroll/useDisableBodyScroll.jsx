import { useEffect } from 'react'

export const useDisableBodyScroll = () => {
	return useEffect(() => {
		document.body.setAttribute('data-scroll', 'no-scroll')
		return () => document.body.setAttribute('data-scroll', 'scroll')
	}, [])
}
