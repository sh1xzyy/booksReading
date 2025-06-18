import { useState } from 'react'
import { BookReviewModalContext } from './useBookReviewModalContext'

export const BookReviewModalProvider = ({ children }) => {
	const [isBookReviewModalOpen, setIsBookReviewModalOpen] = useState(false)
	const [modalData, setModalData] = useState({})

	return (
		<BookReviewModalContext.Provider
			value={{
				isBookReviewModalOpen,
				setIsBookReviewModalOpen,
				modalData,
				setModalData,
			}}
		>
			{children}
		</BookReviewModalContext.Provider>
	)
}
