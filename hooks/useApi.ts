import { useCallback, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ApplicationState } from '@/state/applicationState'

export const useApi = () => {
    const { setCars } = useContext(ApplicationState)
    const getCars = useCallback(async () => {
        const response = await axios.get('http://localhost:3000/api/cars')
        return response.data
    }, [])
    const storeCar = useCallback(
        async ({
            brand,
            model,
            year,
            engineSize,
        }: {
            brand: string
            model: string
            year: number
            engineSize: string
        }) => {
            const response = await axios.post(
                'http://localhost:3000/api/cars',
                {
                    brand,
                    model,
                    year,
                    engineSize,
                }
            )
            console.log(response.data)

            if (response.status === 200 && setCars) {
                setCars(response.data)
            }
        },
        []
    )
    return { getCars, storeCar }
}
