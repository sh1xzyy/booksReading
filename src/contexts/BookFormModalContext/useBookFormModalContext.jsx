import { createContext, useContext } from 'react'

export const BookFormModalContext = createContext()
export const useBookFormModalContext = () => useContext(BookFormModalContext)
