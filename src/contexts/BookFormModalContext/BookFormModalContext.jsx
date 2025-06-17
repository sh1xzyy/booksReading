import { useState } from 'react'
import { BookFormModalContext } from './useBookFormModalContext'

export const BookFormModalProvider = ({ children }) => {
	const [isBookFormOpen, setIsBookFormOpen] = useState(false)

	return (
		<BookFormModalContext.Provider
			value={{ isBookFormOpen, setIsBookFormOpen }}
		>
			{children}
		</BookFormModalContext.Provider>
	)
}
