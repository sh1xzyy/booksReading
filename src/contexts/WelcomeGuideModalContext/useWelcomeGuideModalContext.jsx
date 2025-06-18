import { createContext, useContext } from 'react'

export const WelcomeGuideModalContext = createContext()
export const useWelcomeGuideModalContext = () =>
	useContext(WelcomeGuideModalContext)
