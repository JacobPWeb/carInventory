import { CarsList } from '@/types/cars'
import { createContext, Dispatch, SetStateAction } from 'react'
// Zustand, redux etc
export const ApplicationState = createContext<{
    brands: string[] | null
    setBrands: null | Dispatch<SetStateAction<string[]>>
    cars: null | CarsList
    setCars: null | Dispatch<SetStateAction<CarsList>>
}>({
    brands: null,
    setBrands: null,
    cars: null,
    setCars: null,
})
