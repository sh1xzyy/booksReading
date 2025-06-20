import { createContext, useContext } from 'react'

export const AddStatisticToLocalStorageContext = createContext()
export const useAddStatisticToLocalStorageContext = () => useContext()
