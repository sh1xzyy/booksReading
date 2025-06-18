import { useContext } from 'react'
import { createContext } from 'react'

export const BookReviewModalContext = createContext()
export const useBookReviewModalContext = () =>
	useContext(BookReviewModalContext)
