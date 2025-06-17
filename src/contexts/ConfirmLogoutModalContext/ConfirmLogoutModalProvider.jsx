import { useState } from 'react'
import { ConfirmLogoutModalContext } from './useConfirmLogoutModalContext'

export const ConfirmLogoutModalProvider = ({ children }) => {
	const [isConfirmLogoutModalOpen, setIsConfirmLogoutModalOpen] =
		useState(false)

	return (
		<ConfirmLogoutModalContext.Provider
			value={{ isConfirmLogoutModalOpen, setIsConfirmLogoutModalOpen }}
		>
			{children}
		</ConfirmLogoutModalContext.Provider>
	)
}
