import { createContext, useContext } from 'react'

export const UserProgressContext = createContext()
export const useUserProgressContext = () => useContext(UserProgressContext)
