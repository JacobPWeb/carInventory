import { CarsList } from '@/types/cars'
import { useCallback, useEffect, useState } from 'react'
import { useApi } from './useApi'

type Props = {
    defaultBrands: string[]
}

export const useHome = ({ defaultBrands }: Props) => {
    const [brands, setBrands] = useState(defaultBrands)
    const [cars, setCars] = useState<CarsList>({})

    const { getCars } = useApi()

    useEffect(() => {
        if (!Object.keys(cars).length) {
            getCars().then((data) => setCars(data))
        }
    }, [cars, getCars, setCars])

    return {
        brands,
        setBrands,
        cars,
        setCars,
    }
}
