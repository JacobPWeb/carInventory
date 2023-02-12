import { useCallback, useMemo, useState } from 'react'
import { AddVehicleModal } from '../AddVehicleModal'

export const useNav = () => {
    const [showModal, setShowModal] = useState(false)
    const [modalContent, setModalContent] = useState('vehicle')

    const onModalClose = useCallback(() => {
        setShowModal(false)
    }, [setShowModal])

    const onModalOpenVehicle = useCallback(() => {
        setShowModal(true)
        setModalContent('vehicle')
    }, [setShowModal, setModalContent])

    const modalToDisplay = useMemo(() => {
        return {
            vehicle: { title: 'Add a vehicle', content: AddVehicleModal },
        }
    }, [])

    return {
        showModal,
        onModalClose,
        onModalOpenVehicle,
        modalContent:
            modalToDisplay[modalContent as keyof typeof modalToDisplay],
    }
}
