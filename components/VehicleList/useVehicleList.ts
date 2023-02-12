import { ApplicationState } from '@/state/applicationState'
import { useCallback, useContext, useState } from 'react'

export const useVehicleList = () => {
    const { cars } = useContext(ApplicationState)

    const [showModal, setShowModal] = useState(false)
    const [details, setDetails] = useState<{
        brand: string
        key: number
    } | null>(null)

    const displayVehicle = useCallback(
        (brand: string, key: number) => {
            setDetails({ brand, key })
            setShowModal(true)
        },
        [setShowModal, setDetails]
    )

    const onModalClose = useCallback(() => {
        setShowModal(false)
    }, [setShowModal])
    return { onModalClose, displayVehicle, details, showModal }
}
