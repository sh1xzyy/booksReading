import { createContext, useContext } from 'react'

export const ConfirmLogoutModalContext = createContext()
export const useConfirmLogoutModalContext = () =>
	useContext(ConfirmLogoutModalContext)
