import { useEffect, useState } from 'react'
import { WindowWidthContext } from './useWindowWidth'

export const WindowWidthProvider = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth)
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<WindowWidthContext.Provider value={{ windowWidth }}>
			{children}
		</WindowWidthContext.Provider>
	)
}
