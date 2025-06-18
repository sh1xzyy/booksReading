import { useState } from 'react'
import { WelcomeGuideModalContext } from './useWelcomeGuideModalContext'

export const WelcomeGuideModalProvider = ({ children }) => {
	const [isWelcomeGuideModalOpen, setIsWelcomeGuideModalOpen] = useState(true)

	return (
		<WelcomeGuideModalContext.Provider
			value={{ isWelcomeGuideModalOpen, setIsWelcomeGuideModalOpen }}
		>
			{children}
		</WelcomeGuideModalContext.Provider>
	)
}
