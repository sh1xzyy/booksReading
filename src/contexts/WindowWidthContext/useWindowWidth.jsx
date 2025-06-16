import { createContext, useContext } from 'react'

export const WindowWidthContext = createContext()
export const useWindowWidth = () => useContext(WindowWidthContext)
