import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)

		return () => window.addEventListener('resize', handleResize)
	}, [])

	return windowWidth
}
